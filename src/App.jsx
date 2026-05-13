import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import SideMenu from "./components/Homepage/SideMenu";
import Searchbar from "./components/NavbarSearch";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/reusable/ScrollToTop";
import CheckoutPage from "./pages/Checkout";
import PaymentPage from "./pages/PaymentPage";
import Confirmation from "./pages/Confirmation";

const PageFrame = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header />

      <main className={!isHomePage ? "pt-20" : ""}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageFrame />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="contact" element={<Contact />} />
          <Route path="account/login" element={<Account />} />
          <Route path="product-detail/:slug" element={<ProductDetail />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="order-confirmed" element={<Confirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
