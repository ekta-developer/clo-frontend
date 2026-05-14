import { useEffect, useState } from "react";
import img1 from "../../assets/banner1.webp";
import img2 from "../../assets/banner2.webp";
import img3 from "../../assets/banner3.webp";

const banners = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
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
      <section className="relative mt-4 sm:mt-6 md:mt-8 h-[50vh] xs:h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[calc(100vh-2rem)] w-full overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 overflow-hidden transition-all duration-1000 ${
              currentSlide === index
                ? "z-10 opacity-100 scale-100"
                : "z-0 opacity-0 scale-100"
            }`}>
            {/* IMAGE */}
            <img
              src={banner.image}
              alt={banner.title}
              className="h-full w-full object-cover object-center"
            />
            {/* CONTENT */}
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/10">
              <div className="px-4 text-center text-white sm:px-6 md:px-8">
                <h2 className="mb-2 text-2xl font-light leading-tight xs:text-3xl sm:text-5xl md:mb-4 md:text-6xl lg:mb-6 lg:text-7xl xl:text-8xl">
                  {banner.title}
                </h2>
                <p className="mb-4 text-[9px] uppercase tracking-[1.5px] xs:text-[10px] xs:tracking-[2px] sm:text-xs sm:tracking-[3px] md:mb-6 md:text-sm md:tracking-[5px] lg:mb-8 lg:text-base">
                  {banner.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default HeroSection;
