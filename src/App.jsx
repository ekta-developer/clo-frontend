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
import Cart from "./pages/Cart";
import ScrollToTop from "./components/reusable/ScrollToTop";
import CheckoutPage from "./pages/Checkout";
import PaymentPage from "./pages/PaymentPage";
import Confirmation from "./pages/Confirmation";
import FAQ from "./components/FAQ";
import TermsandConditions from "./components/TermsandConditions";
import TrackOrder from "./components/TrackOrder";
import AllCategory from "./components/Homepage/AllCategory";

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
          <Route path="FAQs" element={<FAQ />} />
          <Route path="terms-condition" element={<TermsandConditions />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="all-categories" element={<AllCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
