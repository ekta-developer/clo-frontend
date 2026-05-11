// src/pages/Wishlist.jsx

import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <section className="bg-[#f7f5f1] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-sm text-[#b08b57] mb-4">
            Saved For You
          </p>

          <h1 className="text-6xl font-serif">Wishlist</h1>
        </div>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <div className="text-center text-gray-500 text-xl">
            No wishlist products yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {wishlist.map((item) => (
              <div key={item.id}>
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <button
                    onClick={() => toggleWishlist(item)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2"
                  >
                    <Heart
                      size={20}
                      className="fill-yellow-500 text-yellow-500"
                    />
                  </button>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-105 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="text-center mt-4">
                  <p className="text-xs tracking-[3px] uppercase text-gray-500">
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-serif mt-2">
                    {item.name}
                  </h3>

                  <p className="font-semibold mt-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;