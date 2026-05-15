// src/pages/ProductDetail.jsx

import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  RotateCcw,
  Truck,
} from "lucide-react";
import { Products } from "../data/Products.js";
import RelatedProducts from "../components/GetMore/RelatedProducts";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext.jsx";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = Products.find((item) => item.slug === slug);

  const [selectedSize] = useState(product.sizes[0]);

  const [selectedColor] = useState(product.colors[0].name);

  const { addToCart } = useProducts();

  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(product?.images?.[0]);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product Not Found
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#f7f2eb] min-h-screen px-4 md:px-10 pt-10 pb-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <p className="text-xs tracking-[3px] uppercase text-gray-500 mb-24">
            Home / Shop / {product.title}
          </p>

          {/* Main Section */}
          <div className="grid lg:grid-cols-2 gap-14 mt-6">
            {/* LEFT */}
            <div className="flex gap-5">
              {/* Side Images */}
              <div className="flex flex-col gap-4">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-24 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                      selectedImage === img
                        ? "border-[#d9c7ae]"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 bg-[#eee4d8] rounded-3xl overflow-hidden">
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col">
              <p className="uppercase tracking-[4px] text-xs text-[#b19777] mb-3">
                {product.category}
              </p>

              <h1 className="text-4xl md:text-5xl font-serif text-[#3e3124] mb-5">
                {product.title}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-2">
                <h2 className="text-3xl font-semibold text-[#3e3124]">
                  ₹{product.price.toLocaleString()}
                </h2>

                <span className="line-through text-gray-400 text-lg">
                  ₹{product.oldPrice.toLocaleString()}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-10">
                Inclusive of all taxes
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-8 text-lg mb-10 max-w-xl">
                {product.description}
              </p>

              {/* Size */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="uppercase text-sm tracking-[3px] text-[#3e3124]">
                  Size
                </h3>

                <button className="uppercase text-xs tracking-[3px] text-[#b19777]">
                  Size Guide
                </button>
              </div>

              <button className="w-fit px-8 py-4 bg-[#eee4d8] text-[#3e3124] rounded-xl border border-[#d7c8b8] font-medium mb-10 hover:bg-[#e5d7c7] transition">
                Free Size
              </button>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="uppercase text-sm tracking-[3px] text-[#3e3124] mb-4">
                  Quantity
                </h3>

                <div className="flex items-center border border-[#d7c8b8] w-fit rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    className="w-14 h-14 flex items-center justify-center hover:bg-[#eee4d8]"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="w-14 text-center text-lg">{quantity}</span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-14 h-14 flex items-center justify-center hover:bg-[#eee4d8]"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mb-10">
                <button
                  onClick={() => {
                    (addToCart(product, selectedSize, selectedColor, quantity),
                      navigate("/cart"));
                  }}
                  className="flex-1 bg-[#eee4d8] text-[#3e3124] py-5 rounded-2xl uppercase tracking-[3px] font-medium hover:bg-[#e2d5c7] transition"
                >
                  Add To Bag
                </button>
                <button className="w-16 rounded-2xl border border-[#d7c8b8] flex items-center justify-center hover:bg-[#eee4d8] transition">
                  <Heart size={22} />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-y border-[#ddd2c6] py-8">
                <div className="text-center">
                  <Truck className="mx-auto mb-3 text-[#b19777]" size={24} />
                  <p className="uppercase text-xs tracking-[3px] text-[#3e3124]">
                    Free Shipping
                  </p>
                </div>

                <div className="text-center">
                  <RotateCcw
                    className="mx-auto mb-3 text-[#b19777]"
                    size={24}
                  />
                  <p className="uppercase text-xs tracking-[3px] text-[#3e3124]">
                    Easy Returns
                  </p>
                </div>

                <div className="text-center">
                  <ShieldCheck
                    className="mx-auto mb-3 text-[#b19777]"
                    size={24}
                  />
                  <p className="uppercase text-xs tracking-[3px] text-[#3e3124]">
                    Secure Checkout
                  </p>
                </div>
              </div>

              {/* Fabric */}
              <div className="mt-8">
                <h3 className="uppercase text-sm tracking-[3px] text-[#3e3124] mb-3">
                  Fabric
                </h3>

                <p className="text-gray-600">{product.fabric}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts />
    </>
  );
};

export default ProductDetail;
