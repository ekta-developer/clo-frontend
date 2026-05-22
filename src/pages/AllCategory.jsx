import { useState } from "react";
import { Heart } from "lucide-react";

import kurtaSet from "../assets/kurtaSet.jpg";
import Allsaree from "../assets/Allsaree.jpg";
import img from "../assets/img.jpg";
import anarkalidress from "../assets/anarkalidress.jpg";
import bridal from "../assets/bridal.jpg";
import Breadcrumb from "../components/common/Breadcrumb.jsx";

const products = [
  {
    id: 1,
    category: "LEHENGAS",
    name: "Emerald Zari Lehenga",
    image: img,
    price: "₹18,999",
    oldPrice: "₹24,999",
    sale: true,
  },
  {
    id: 2,
    category: "KURTA SETS",
    name: "Chikankari Kurta Set",
    image: kurtaSet,
    price: "₹6,499",
    oldPrice: "",
    sale: false,
  },
  {
    id: 3,
    category: "SAREES",
    name: "Banarasi Saree",
    image: Allsaree,
    price: "₹14,999",
    oldPrice: "₹18,999",
    sale: true,
  },
  {
    id: 4,
    category: "SHARARA",
    name: "Mirror Sharara Set",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
    price: "₹12,499",
    oldPrice: "",
    sale: false,
  },
  {
    id: 5,
    category: "ANARKALI",
    name: "Royal Anarkali Gown",
    image: anarkalidress,
    price: "₹15,999",
    oldPrice: "₹19,999",
    sale: true,
  },
  {
    id: 6,
    category: "BRIDAL WEAR",
    name: "Floral Bridal Lehenga",
    image: bridal,
    price: "₹22,499",
    oldPrice: "",
    sale: false,
  },
];

const categories = [
  "ALL",
  "LEHENGAS",
  "KURTA SETS",
  "SAREES",
  "SHARARA",
  "BRIDAL WEAR",
  "ANARKALI",
];

const AllCategory = () => {
  const [changeCategory, setChangeCategory] = useState("ALL");

  const filteredProducts =
    changeCategory === "ALL"
      ? products
      : products.filter((product) => product.category === changeCategory);

  return (
    <>
      <div className="bg-[#f8f4ef] min-h-screen">
        {/* Breadcrumb */}
        <div className="px-6 md:px-10 lg:px-20 pt-20">
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Categories", path: "/categories" },
              ...(changeCategory !== "ALL" ? [{ label: changeCategory }] : []),
            ]}
          />
        </div>

        {/* Heading */}
        <section className="text-center py-10 md:py-14">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mt-4px-4">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setChangeCategory(item)}
                className={`px-8 py-3 border text-sm tracking-[2px] transition duration-300 uppercase
            ${
              changeCategory === item
                ? "bg-black text-white border-black"
                : "border-black hover:bg-black hover:text-white"
            }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-6 md:px-10 lg:px-20 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                {/* Image */}
                <div className="relative overflow-hidden bg-white">
                  {product.sale && (
                    <span className="absolute top-4 left-4 z-10 bg-black text-white text-xs px-4 py-2 tracking-[2px]">
                      SALE
                    </span>
                  )}

                  <button className="absolute top-4 right-4 z-10 bg-[#f8f4ef] w-9 h-9 rounded-full flex items-center justify-center hover:bg-red-400 hover:text-white transition duration-300">
                    <Heart size={16} />
                  </button>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-125 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center pt-6">
                  <p className="text-xs tracking-[3px] text-[#7b6d6d] uppercase">
                    {product.category}
                  </p>

                  <h3 className="font-serif text-2xl mt-3">{product.name}</h3>

                  <div className="flex items-center justify-center gap-3 mt-4">
                    <span className="text-2xl font-semibold">
                      {product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-lg">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AllCategory;
