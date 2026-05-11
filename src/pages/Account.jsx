import { useState } from "react";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import accountImage from "../assets/loginImg.jpg";

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
    <section className="account-page">
      <div className="account-card">
        <div className="account-visual">
          <img
            src={accountImage}
            alt="Elegant ethnic fashion"
            loading="lazy"
            className="account-visual-img"
          />
        </div>

        <div className="account-panel">
          <div className="account-form-wrap">
            <div className="account-heading">
              <p className="account-eyebrow">
                Welcome To CLO
              </p>
              <h2>
                {step === "details" ? "Sign in or sign up" : "Verify account"}
              </h2>
            </div>

            <div className="account-methods">
              <button
                type="button"
                onClick={() => switchMethod("phone")}
                className={`account-method ${isPhone ? "is-active" : ""}`}>
                <Phone size={18} />
                Phone
              </button>

              <button
                type="button"
                onClick={() => switchMethod("email")}
                className={`account-method ${!isPhone ? "is-active" : ""}`}>
                <Mail size={18} />
                Email
              </button>
            </div>

            {step === "details" ? (
              <form onSubmit={handleSubmit} className="account-form">
                {isPhone ? (
                  <div className="account-field">
                    <label
                      htmlFor="phone">
                      Mobile number
                    </label>
                    <div className="account-phone-input">
                      <div className="account-phone-code">
                        <span>IN</span>
                        <span>+91</span>
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength="10"
                        placeholder="Enter 10 digit number"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="account-field">
                    <label
                      htmlFor="email">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="account-primary-btn">
                  {isPhone ? "Request OTP" : "Continue With Email"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="account-form">
                <button
                  type="button"
                  onClick={() => setStep("details")}
                  className="account-back-btn">
                  <ArrowLeft size={16} />
                  Change {isPhone ? "phone number" : "email"}
                </button>

                <div className="account-field">
                  <label
                    htmlFor="otp">
                    Verification code
                  </label>
                  <input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    maxLength="6"
                    placeholder="Enter code"
                    className="account-code-input"
                  />
                </div>

                <button
                  type="submit"
                  className="account-primary-btn">
                  Verify & Continue
                </button>
              </form>
            )}

            <div className="account-divider">
              <span>or</span>
            </div>

            <button
              type="button"
              onClick={() => switchMethod(isPhone ? "email" : "phone")}
              className="account-secondary-btn">
              {isPhone ? <Mail size={20} /> : <Phone size={20} />}
              Continue With {isPhone ? "Email" : "Phone Number"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
