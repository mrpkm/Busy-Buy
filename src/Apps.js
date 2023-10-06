import Nav from "./component/header/Nav";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import CostumeItemContext, { useValue } from "./context/useContext";
import Order from "./pages/order/Order";
import SignIn from "./pages/userAuth/SignIn";
import Register from "./pages/userAuth/Register";
import LodingPage from "./pages/logingPage/LodingPage";

function Apps() {
    const { loding } = useValue();
    return (
        <div className="App">
            {/* {
                loding
                    ? (
                        <LodingPage />
                    ) : ( */}
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/buy" element={<Order />} />
                    <Route
                        path="/signin"
                        element={<SignIn />}
                    />
                    <Route
                        path="/register"
                        element={<Register />}
                    />
                </Routes>
            </BrowserRouter>
            {/* )} */}
        </div>
    );
}

export default Apps;
