import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f7f4ef] px-4 md:px-10 lg:px-20 py-10 text-[#2c1f1f]">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-light">Checkout</h1>

        <div className="flex items-center justify-center gap-5 mt-6 text-xs tracking-[3px] uppercase">
          <span className="text-black font-medium">1. Shipping</span>

          <div className="w-5 h-px bg-[#6e6a66]" />

          <span className="text-[#6e6a66]">2. Payment</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16">
        {/* Left Form Section */}
        <div>
          <h2 className="text-3xl font-serif mb-10">Shipping Details</h2>

          <form className="space-y-7">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField label="First Name" />
              <InputField label="Last Name" />
            </div>

            <InputField label="Email" />
            <InputField label="Phone" />
            <InputField label="Address" />

            {/* City / State / Pin */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <InputField label="City" />
              <InputField label="State" />
              <InputField label="Pin Code" />
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() => navigate("/payment")}
              className="w-full bg-black hover:bg-[#222] transition-all duration-300 text-white uppercase tracking-[3px] py-5 text-sm mt-4"
            >
              Continue To Payment
            </button>
          </form>
        </div>

        {/* Right Summary */}
        <div className="bg-[#f3eee7] p-6 md:p-8 h-fit">
          <h3 className="text-3xl font-serif mb-8">Order Summary</h3>

          {/* Product */}
          <div className="flex gap-4 border-b border-[#d8d1c8] pb-5">
            <img
              src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=500&auto=format&fit=crop"
              alt="product"
              className="w-20 h-24 object-cover"
            />

            <div className="flex-1">
              <div className="flex justify-between gap-3">
                <h4 className="text-sm leading-5">
                  Blush Chikankari Kurta Set
                </h4>

                <span className="text-sm font-medium whitespace-nowrap">
                  ₹6,499
                </span>
              </div>

              <p className="text-xs text-[#7a746d] mt-2">XS · Qty 1</p>
            </div>
          </div>

          {/* Promo */}
          <div className="py-6 border-b border-[#d8d1c8]">
            <p className="uppercase tracking-[3px] text-xs mb-4">Promo Code</p>

            <div className="flex">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 border border-[#d3ccc3] bg-transparent px-4 py-3 outline-none text-sm"
              />

              <button className="bg-[#000000] hover:bg-[#521212] transition px-5 text-white uppercase tracking-[2px] text-xs">
                Apply
              </button>
            </div>

            <p className="text-[11px] text-[#8c847a] mt-3">
              Try CLO10, LIBAAS15, or FESTIVE20
            </p>
          </div>

          {/* Price */}
          <div className="pt-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹6,499</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span className="text-[#b28a4d]">Free</span>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-2xl font-medium">Total</span>

              <span className="text-3xl font-semibold">₹6,499</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label }) => {
  return (
    <div>
      <label className="block uppercase tracking-[3px] text-xs text-[#5d5550] mb-3">
        {label}
      </label>

      <input
        type="text"
        className="w-full border border-[#d5cfc7] bg-transparent h-14 px-4 outline-none focus:border-[#651717] transition"
      />
    </div>
  );
};

export default CheckoutPage;
