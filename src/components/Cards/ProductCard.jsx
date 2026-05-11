// src/components/ProductCard.jsx

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.slug}`)}
      className="cursor-pointer group"
    >
      <div className="bg-[#eee4d8] rounded-3xl overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-100 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <h3 className="text-xl font-semibold text-[#3e3124] mb-2">
        {product.title}
      </h3>

      <p className="text-gray-600">
        ₹{product.price.toLocaleString()}
      </p>
    </div>
  );
};

export default ProductCard;