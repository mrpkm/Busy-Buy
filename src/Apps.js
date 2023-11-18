import Nav from "./component/header/Nav";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import CostumeItemContext, { useValue } from "./context/useContext";
import Order from "./pages/order/Order";
import SignIn from "./pages/userAuth/SignIn";
import Register from "./pages/userAuth/Register";
import LodingPage from "./pages/logingPage/LodingPage";
import Deshboard from "./pages/deshboard/Deshboard";
import Footer from "./component/footer/Footer";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

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
                {/* <Nav /> */}
                <Routes>
                    <Route path="/" element={[<Nav />, <Deshboard />, <Footer />]} />
                    <Route path="/views" element={[<Nav />, <Home />, <Footer />]} />
                    <Route path="/cart" element={[<Nav />, <Cart />, <Footer />]} />
                    <Route path="/buy" element={[<Nav />, <Order />, <Footer />]} />
                    <Route
                        path="/signin"
                        element={[<Nav />, <SignIn />, <Footer />]}
                    />
                    <Route
                        path="/register"
                        element={[<Nav />, <Register />, <Footer />]}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>


            {/* )} */}
        </div>
    );
}

export default Apps;
