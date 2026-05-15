import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f4ef] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-[#efe7da] flex items-center justify-center">
          <Check className="w-10 h-10 text-[#b88b3f]" strokeWidth={2.2} />
        </div>

        {/* Heading */}
        <p className="mt-8 text-xs tracking-[6px] uppercase text-[#b88b3f]">
          Thank You
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-serif text-[#1a1a1a]">
          Your order is confirmed
        </h1>

        <p className="mt-6 text-[#5d5550] text-lg leading-8 max-w-2xl mx-auto">
          We've sent a confirmation to your email. Your couture is being
          lovingly prepared.
        </p>

        {/* Order Details Box */}
        <div className="mt-14 border border-[#ddd4ca] bg-[#faf7f2] px-6 md:px-10 py-10 text-left">
          <div className="space-y-6">
            {/* Row */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-[#5d5550] text-lg">Order Number</span>

              <span className="font-semibold text-lg tracking-wide text-[#1a1a1a]">
                CLO-WXTBGD
              </span>
            </div>

            {/* Row */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-[#5d5550] text-lg">Total Paid</span>

              <span className="font-semibold text-xl text-[#1a1a1a]">
                ₹6,499
              </span>
            </div>

            {/* Row */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-[#5d5550] text-lg">
                Estimated Delivery
              </span>

              <span className="text-[#1a1a1a] text-lg">
                5–7 business days
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-black hover:bg-[#222] transition-all duration-300 text-white uppercase tracking-[3px] px-10 py-4 text-sm w-full sm:w-auto"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/account")}
            className="border border-[#d7cec4] hover:border-black hover:text-black transition-all duration-300 uppercase tracking-[3px] px-10 py-4 text-sm text-[#5d5550] w-full sm:w-auto"
          >
            View Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
