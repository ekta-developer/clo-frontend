import React from "react";
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
      <ShopNow />
      <CustomerReview />
      <DenimSection />
    </>
  )
};

export default Home;
