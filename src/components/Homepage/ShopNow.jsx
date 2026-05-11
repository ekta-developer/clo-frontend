import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/image1-optimized.jpg";
import img2 from "../../assets/image2-optimized.jpg";
import img3 from "../../assets/saree.jpg";

const ShopNow = () => {
  const navigate = useNavigate();

  const images = [
    { image: img1, slug: "wine-banarasi-saree" },
    { image: img2, slug: "red-silk-saree" },
    { image: img3, slug: "royal-gold-saree" },
    { image: img1, slug: "wine-banarasi-saree" },
    { image: img2, slug: "red-silk-saree" },
    { image: img3, slug: "royal-gold-saree" },
  ];

  return (
    <section className="w-full bg-[#f3f3f3] py-14 md:py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-6 mb-12 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6">
          Discover Your Style
        </h2>
        <p className="text-sm md:text-base text-gray-600 leading-7">
          Explore our latest fashion collection crafted for elegance, comfort,
          and everyday luxury.
        </p>
        <button className="mt-8 border border-black px-8 py-3 uppercase tracking-[3px] hover:bg-black hover:text-white transition duration-300">
          Shop Now
        </button>
      </div>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={6}
        speed={800}               // ✅ silky slide transition
        grabCursor={true}         // ✅ grab cursor on desktop
        loop={true}
        freeMode={{               // ✅ momentum-based free scrolling
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
          0:    { slidesPerView: 1.2 },   
          640:  { slidesPerView: 2.2 },
          1024: { slidesPerView: 5.2 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => navigate(`/product-detail/${image.slug}`)}
              className="overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={image.image}
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