import saree from "../../assets/saree.jpg";
import suit from "../../assets/suit.jpg";
import newArrivals from "../../assets/newArrivals.jpg";
import Kurta from "../../assets/kurta.jpg";
import Plussize from "../../assets/plussize.jpg";
import img11 from "../../assets/img11.jpeg";
import img22 from "../../assets/img22.webp";
import img33 from "../../assets/img33.jpeg";
import img44 from "../../assets/img44.webp";
import img55 from "../../assets/img55.webp";
import img77 from "../../assets/img77.webp";
import img88 from "../../assets/img88.webp";

const CategorySection = () => {
  const categories = [
    { title: "Suits", image: suit },
    { title: "New Arrivals", image: newArrivals },
    { title: "Kurtas", image: Kurta },
    { title: "Sarees", image: saree },
    { title: "Plus Sizes", image: Plussize },
    { title: "Dresses", image: img11 },
    { title: "Co-ords", image: img22 },
    { title: "Tunics", image: img33 },
    { title: "Kaftans", image: img44 },
    { title: "Bottomwear", image: img55 },
    { title: "Fragrances", image: img77 },
    { title: "Special Offer", image: img88 },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="mb-8 px-4 text-center md:mb-10">
        <h2 className="text-3xl font-extrabold uppercase tracking-wide text-black md:text-5xl">
          Shop By Categories
        </h2>
      </div>

      <div className="mx-auto max-w-412.5 px-3 sm:px-6">
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((item) => (
            <article
              key={item.title}
              className="group relative aspect-3/4 min-h-60 overflow-hidden bg-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent transition duration-300 group-hover:from-black/75" />
              <div className="absolute bottom-5 left-0 z-10 w-full px-3 text-center">
                <h3 className="text-xl font-extrabold uppercase leading-tight text-white drop-shadow-md sm:text-2xl md:text-3xl">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
