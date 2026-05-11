import React from "react";
import { Trash2 } from "lucide-react";

const cartItems = [
  {
    id: 1,
    name: "Oversized T-Shirt",
    price: 999,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Casual Hoodie",
    price: 1499,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=800&auto=format&fit=crop",
  },
];

const Cart = () => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="mt-2 text-gray-500">
          You have {cartItems.length} items in your cart
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border p-4 shadow-sm sm:flex-row sm:items-center"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-28 w-28 rounded-xl object-cover"
              />

              {/* Details */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="mt-1 text-gray-500">
                  ₹{item.price} × {item.quantity}
                </p>

                <p className="mt-2 font-medium">
                  Total: ₹{item.price * item.quantity}
                </p>
              </div>

              {/* Remove Button */}
              <button className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-gray-100">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl border p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>

          <button className="mt-6 w-full rounded-xl bg-black py-3 text-white transition hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;