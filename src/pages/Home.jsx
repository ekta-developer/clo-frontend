import CategorySection from "../components/Homepage/CategorySection";
import CustomerReview from "../components/Homepage/CustomerReview";
import DenimSection from "../components/Homepage/DenimSection";
import HeroSection from "../components/Homepage/HeroSection";
import ShopByTrends from "../components/Homepage/ShopByTrends";
import ShopNow from "../components/Homepage/ShopNow";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ShopByTrends />
      <CategorySection />
      {/* Women's Collection */}
      <ShopNow type="women" />
      {/* Men's Collection */}
      <ShopNow type="men" /> <CustomerReview />
      <DenimSection />
    </>
  );
};

export default Home;
