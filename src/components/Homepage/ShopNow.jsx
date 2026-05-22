import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useNavigate } from "react-router-dom";

// Women Images
import women1 from "../../assets/image1-optimized.jpg";
import women2 from "../../assets/image2-optimized.jpg";
import women3 from "../../assets/saree.jpg";

// Men Images
import men1 from "../../assets/men1.jpg";
import men2 from "../../assets/men2.jpg";
import men3 from "../../assets/men3.jpg";

const ShopNow = ({ type = "women" }) => {
  const navigate = useNavigate();

  // ✅ Dynamic Content Based On Type
  const sectionData = {
    women: {
      title: "Elegance In Every Drape",
      subtitle: "Women's Collection",
      description:
        "Step into timeless beauty with our curated women’s collection featuring luxurious sarees, graceful silhouettes, and handcrafted elegance for every celebration.",

      buttonText: "Explore Women's Fashion",

      images: [
        { image: women1, slug: "wine-banarasi-saree" },
        { image: women2, slug: "red-silk-saree" },
        { image: women3, slug: "royal-gold-saree" },
        { image: women1, slug: "wine-banarasi-saree" },
        { image: women2, slug: "red-silk-saree" },
        { image: women3, slug: "royal-gold-saree" },
      ],
    },

    men: {
      title: "Modern Style Redefined",
      subtitle: "Men's Collection",
      description:
        "Discover premium menswear crafted for confidence and sophistication — from sharp formal fits to effortless casual essentials designed for the modern man.",

      buttonText: "Explore Men's Fashion",

      images: [
        { image: men1, slug: "classic-black-suit" },
        { image: men2, slug: "casual-white-shirt" },
        { image: men3, slug: "royal-blue-blazer" },
        { image: men1, slug: "classic-black-suit" },
        { image: men2, slug: "casual-white-shirt" },
        { image: men3, slug: "royal-blue-blazer" },
      ],
    },
  };

  const currentSection = sectionData[type];

  return (
    <section className="w-full bg-[#f7f2eb] py-14 md:py-24 overflow-hidden">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-12 md:mb-16">
        <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-3">
          {currentSection.subtitle}
        </p>
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 leading-tight">
          {currentSection.title}
        </h2>

        <p className="text-sm md:text-base text-gray-600 leading-7">
          {currentSection.description}
        </p>
        <button className="mt-8 border border-black px-8 py-3 uppercase tracking-[3px] hover:bg-black hover:text-white transition duration-300">
          {currentSection.buttonText}
        </button>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={6}
        speed={800}
        grabCursor={true}
        loop={true}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.6,
          momentumVelocityRatio: 0.6,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 5.2 },
        }}
      >
        {currentSection.images.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => navigate(`/product-detail/${item.slug}`)}
              className="overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="w-full h-75 sm:h-100 md:h-125 object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ShopNow;
