import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";

const products = [
  {
    id: 1,
    category: "KURTA SETS",
    name: "Blush Chikankari Kurta Set",
    price: "₹6,499",
    image:
      "https://images.unsplash.com/photo-1583391733981-849f0f0f6b0f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "SHARARA",
    name: "Ivory Mirror Sharara Set",
    price: "₹12,499",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "MENSWEAR",
    name: "Navy Velvet Sherwani",
    price: "₹22,999",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
  },
];

const RelatedProducts = () => {
  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <section className="bg-[#f7f5f1] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item) => {
          const active = isWishlisted(item.id);

          return (
            <div key={item.id}>
              <div className="relative overflow-hidden">
                {/* Heart Button */}
                <button
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 z-10"
                >
                  <Heart
                    size={20}
                    className={`${
                      active
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-black"
                    }`}
                  />
                </button>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-105 object-cover"
                />
              </div>

              <div className="text-center mt-4">
                <p className="text-xs tracking-[3px] text-gray-500 uppercase">
                  {item.category}
                </p>

                <h3 className="text-2xl font-serif mt-2">{item.name}</h3>

                <p className="font-semibold mt-2">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;