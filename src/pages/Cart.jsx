import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const price = 6499;
  const total = price * quantity;
  return (
    <div className="min-h-screen bg-[#f7f4ef] px-4 md:px-10 lg:px-20 py-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a]">
          Shopping Bag
        </h1>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14">
        {/* Left Section */}
        <div>
          {/* Top Border */}
          <div className="border-t border-[#d9d2c9] pt-6">
            {/* Product Row */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Product Image */}
              <img
                src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=500&auto=format&fit=crop"
                alt="product"
                className="w-28 h-36 object-cover"
              />

              {/* Product Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="uppercase tracking-[3px] text-xs text-[#7a746d] mb-3">
                      Kurta Sets
                    </p>

                    <h2 className="text-2xl font-serif text-[#1a1a1a]">
                      Blush Chikankari Kurta Set
                    </h2>

                    <p className="text-[#5d5550] mt-2">Size: XS</p>

                    {/* Quantity */}
                    <div className="mt-5 flex items-center border border-[#d6cec4] w-fit">
                      <button
                        onClick={() =>
                          setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                        }
                        className="w-12 h-10 text-lg hover:bg-[#ece5db] transition"
                      >
                        −
                      </button>

                      <div className="w-12 h-10 flex items-center justify-center text-sm">
                        {quantity}
                      </div>

                      <button
                        onClick={() => setQuantity((prev) => prev + 1)}
                        className="w-12 h-10 text-lg hover:bg-[#ece5db] transition"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button className="text-[#5d5550] hover:text-black transition">
                    <X size={18} />
                  </button>
                </div>

                {/* Price */}
                <div className="flex justify-end mt-8">
                  <span className="text-3xl font-semibold text-[#1a1a1a]">
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Border */}
            <div className="border-b border-[#d9d2c9] mt-16" />
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-[#f3eee7] p-6 md:p-8 h-fit">
          <h3 className="text-3xl font-serif mb-10 text-[#1a1a1a]">
            Order Summary
          </h3>

          {/* Summary */}
          <div className="space-y-5">
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-lg">
              <span>Shipping</span>
              <span className="text-[#b88b3f]">Free</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b border-[#d9d2c9] my-8" />

          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="text-3xl font-medium">Total</span>

            <span className="text-3xl font-semibold">
              ₹{total.toLocaleString()}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-10 space-y-5">
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-black hover:bg-[#222] transition-all duration-300 text-white uppercase tracking-[3px] py-5 text-sm"
            >
              Proceed To Checkout
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full uppercase tracking-[3px] text-sm text-[#5d5550] hover:text-black transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
