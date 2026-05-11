import { useState } from "react";
import { ArrowLeft, Mail, Phone } from "lucide-react";

const Account = () => {
  const [method, setMethod] = useState("phone");
  const [step, setStep] = useState("details");

  const isPhone = method === "phone";

  const switchMethod = (nextMethod) => {
    setMethod(nextMethod);
    setStep("details");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep("verify");
  };

  return (
    <section className="min-h-screen bg-[#f7f2eb] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        {/* FORM SECTION */}
        <div className="flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            {/* HEADING */}
            <div className="mb-8">
              <h2 className="mb-2 text-center text-3xl font-semibold text-black">
                {step === "details" ? "Sign in" : "Verify account"}
              </h2>
            </div>

            {/* METHOD BUTTONS */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => switchMethod("phone")}
                className={`flex h-12 items-center justify-center gap-2 rounded-md border text-sm font-medium transition-all duration-300 ${
                  isPhone
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-black hover:border-black"
                }`}
              >
                <Phone size={18} />
                Phone
              </button>

              <button
                type="button"
                onClick={() => switchMethod("email")}
                className={`flex h-12 items-center justify-center gap-2 rounded-md border text-sm font-medium transition-all duration-300 ${
                  !isPhone
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-black hover:border-black"
                }`}
              >
                <Mail size={18} />
                Email
              </button>
            </div>

            {/* DETAILS FORM */}
            {step === "details" ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {isPhone ? (
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Mobile Number
                    </label>

                    <div className="flex h-12 overflow-hidden rounded-md border border-gray-200">
                      <div className="flex items-center gap-2 border-r border-gray-200 bg-gray-50 px-4 text-sm font-medium">
                        <span>IN</span>
                        <span>+91</span>
                      </div>

                      <input
                        id="phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="Enter 10 digit number"
                        className="w-full px-4 text-sm outline-none"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm outline-none focus:border-black"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center rounded-md bg-black text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                >
                  {isPhone ? "Request OTP" : "Continue With Email"}
                </button>
              </form>
            ) : (
              <form className="space-y-6">
                <button
                  type="button"
                  onClick={() => setStep("details")}
                  className="flex items-center gap-2 text-sm font-medium text-black"
                >
                  <ArrowLeft size={16} />
                  Change {isPhone ? "Phone Number" : "Email"}
                </button>

                <div>
                  <label
                    htmlFor="otp"
                    className="mb-2 block text-sm font-medium text-black"
                  >
                    Verification Code
                  </label>

                  <input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="Enter OTP"
                    className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm outline-none focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center rounded-md bg-black text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                >
                  Verify & Continue
                </button>
              </form>
            )}

            {/* DIVIDER */}
            <div className="relative my-8 flex items-center justify-center">
              <div className="h-px w-full bg-gray-200" />

              <span className="absolute bg-white px-4 text-sm text-gray-500">
                or
              </span>
            </div>

            {/* SWITCH METHOD */}
            <button
              type="button"
              onClick={() => switchMethod(isPhone ? "email" : "phone")}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-md border border-gray-200 text-sm font-medium text-black transition-all duration-300 hover:border-black"
            >
              {isPhone ? <Mail size={20} /> : <Phone size={20} />}
              Continue With {isPhone ? "Email" : "Phone"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
