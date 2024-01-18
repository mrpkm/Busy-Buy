import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const itemContext = createContext();

const auth = getAuth(app);

function useValue() {
  const value = useContext(itemContext);
  return value;
}

const CostumeItemContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [allOrder, setAllOrder] = useState([]);
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [rangePrice, setRangePrice] = useState(20000);
  const [filterCategory, setFilterCategory] = useState([]);
  const [checkBox, setCheckBox] = useState([]);

  useEffect(() => {
    try {
      const func = async () => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((response) => {
            response.map((item) => (item.price = item.price * 20));
            setData(response);
            setLoding(false);
            const categories = [
              ...new Set(response.map((item) => item.category)),
            ];
            setFilterCategory(categories);
          });
      };
      func();
    } catch (err) {
      console.log("error on api", err);
    }
  }, []);

  useEffect(() => {
    // search input
    const searchfilter = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // price range
    const rangePricess = searchfilter.filter(
      (item) => item.price <= rangePrice
    );
    // check box

    const filteredByCategories =
      checkBox.length === 0
        ? rangePricess
        : rangePricess.filter((item) => checkBox.includes(item.category));

    // set data to filter data
    setFilterData(filteredByCategories);
  }, [searchQuery, data, rangePrice, checkBox]);

  const handleSearach = (ele) => {
    setSearchQuery(ele);
  };

  const handleRange = (ele) => {
    setRangePrice(ele);
  };
  const handleCategory = (category) => {
    if (checkBox.includes(category)) {
      setCheckBox(checkBox.filter((cat) => cat !== category));
    } else {
      setCheckBox([...checkBox, category]);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsubscribe = onSnapshot(
          query(
            collection(db, "users", user.uid, "carts"),
            orderBy("id", "desc")
          ),
          (snapshot) => {
            const carts = snapshot.docs.map((cart) => {
              return cart.data();
            });
            setCart(carts);
            setLoding(false);
          }
        );
        return () => {
          unsubscribe();
        };
      }
    });
  }, []);

  const addToCart = async (product) => {
    const customId = (Number.MAX_SAFE_INTEGER - Date.now()).toString();
    try {
      const cartQty = cart.find((qty) => qty.title === product.title);
      const carts = cart.some((cart) => cart.title === product.title);
      const cartRef = doc(db, "users", user.uid, "carts", customId);
      if (!carts) {
        await setDoc(cartRef, {
          id: customId,
          title: product.title,
          price: product.price,
          image: product.image,
          qty: 1,
        });
        toast.success("Successfully added to Cart !!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      } else {
        await updateDoc(doc("users", user.uid, "carts", cartQty.id), {
          qty: cartQty.qty + 1,
        });
        toast.error("Cart Item Increase !!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error adding cart item:", error);
    }
  };

  const cartTotal = cart.map((item) => item.qty);
  const redTotal = cartTotal.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  // console.log("cartTotal", cartTotal)
  // console.log("redTotal", redTotal)

  // increase the cart qty..
  const increaseQty = async (id) => {
    const cartQty = cart.find((qty) => qty.id === id);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await updateDoc(doc(db, "users", user.uid, "carts", id), {
          qty: cartQty.qty + 1,
        });
        toast.success("Cart Item Increase !!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    });
  };

  // decerease the cart qty..
  const decreaseQuantity = async (id) => {
    const cartQty = cart.find((qty) => qty.id === id);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (cart.qty > 1) {
          await updateDoc(doc(db, "users", user.uid, "carts", id), {
            qty: cartQty.qty - 1,
          });
          toast.success("Cart Item Decrease !!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        } else {
          await updateDoc(doc(db, "users", user.uid, "carts", id), {
            qty: cartQty.qty - 1,
          });
          await deleteDoc(doc(db, "users", user.uid, "carts", id));
          toast.success("Cart Item Delete !!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        }
      }
    });
  };

  // delete from cart item
  const removeToCart = async (id) => {
    console.log(id);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await deleteDoc(doc(db, "users", user.uid, "carts", id));
        toast.success("Cart Item Delete !!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    });
  };

  // send all item to order list
  const buyNow = async (items) => {
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const customId = Date.now().toString();
          const cartRef = doc(db, "users", user.uid, "orders", customId);

          const order = items.map((item) => {
            return {
              id: item.id,
              title: item.title,
              price: item.price,
              qty: item.qty,
            };
          });

          await setDoc(cartRef, {
            id: customId,
            date: new Date().toISOString().slice(0, 10),
            order: order,
          });
          items.map(async (item) => {
            await deleteDoc(doc(db, "users", user.uid, "carts", item.id));
          });
          toast.success("Order Successfully complete!!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async function () {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          await onSnapshot(
            query(
              collection(db, "users", user.uid, "orders"),
              orderBy("id", "desc")
            ),
            (snapshot) => {
              const allOrders = snapshot.docs.map((ordet) => {
                return ordet.data();
              });
              setAllOrder(allOrders);
              setLoding(false);
            }
          );
        }
      });
    })();
  }, []);

  // total price of cart and order list
  const totalPrice = cart.reduce((acc, tem) => {
    return acc + tem.price * tem.qty;
  }, 0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          const uid = user.uid;
          setUser(user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log("err", err);
      }
    });
  }, []);

  return (
    <itemContext.Provider
      value={{
        data,
        addToCart,
        cart,
        removeToCart,
        increaseQty,
        decreaseQuantity,
        buyNow,
        totalPrice,
        allOrder,
        loding,
        searchQuery,
        handleSearach,
        filterData,
        rangePrice,
        handleRange,
        filterCategory,
        checkBox,
        handleCategory,
        redTotal,
      }}
    >
      {children}
    </itemContext.Provider>
  );
};

export default CostumeItemContext;

export { itemContext, useValue };
