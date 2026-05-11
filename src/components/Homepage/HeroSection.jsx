import { useEffect, useState } from "react";
import img1 from "../../assets/banner1.webp";
import img2 from "../../assets/banner2.webp";
import img3 from "../../assets/banner3.webp";

const banners = [
  {
    image: img1,
    // title: "Summer",
    // subtitle: "A Curated Collection",
  },
  {
    image: img2,
    // title: "Gerua",
    // subtitle: "New Fashion Trends",
  },
  {
    image: img3,
    // title: "Luxury",
    // subtitle: "Elegant Styles For You",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* HERO SLIDER */}

      <section className="relative mt-8 h-[calc(100vh-2rem)] w-full overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 overflow-hidden ${
              currentSlide === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-100 z-0"
            }`}>
            {/* IMAGE */}
            <img
              src={banner.image}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-6">
                  {banner.title}
                </h2>

                <p className="uppercase tracking-[3px] md:tracking-[5px] text-xs sm:text-sm md:text-base mb-8">
                  {banner.subtitle}
                </p>

                {/* <button className="border border-white px-6 py-3 md:px-8 uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
                  Explore
                </button> */}
              </div>
            </div>
          </div>
        ))}

      </section>
    </>
  );
};

export default HeroSection;
