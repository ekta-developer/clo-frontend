
import {
  FaShieldAlt,
  FaUndoAlt,
  FaTruck,
  FaLock,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f4ef] pt-20 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* TOP FEATURES */}
      <div className="border border-[#7d6240]/40 bg-white/20 backdrop-blur-md rounded-xl px-6 py-8 mb-16 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md group-hover:-translate-y-1 transition duration-300">
              <FaShieldAlt className="text-[#b18d43] text-xl" />
            </div>

            <span className="text-sm md:text-base text-gray-800 font-medium">
              Secure Shopping
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md group-hover:-translate-y-1 transition duration-300">
              <FaUndoAlt className="text-[#b18d43] text-xl" />
            </div>

            <span className="text-sm md:text-base text-gray-800 font-medium">
              Easy 7-Day Returns
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md group-hover:-translate-y-1 transition duration-300">
              <FaTruck className="text-[#b18d43] text-xl" />
            </div>

            <span className="text-sm md:text-base text-gray-800 font-medium">
              Free Shipping ₹999+
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md group-hover:-translate-y-1 transition duration-300">
              <FaLock className="text-[#b18d43] text-xl" />
            </div>

            <span className="text-sm md:text-base text-gray-800 font-medium">
              100% Secure Payments
            </span>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-[2rem] px-6 md:px-10 py-10 mb-20 shadow-sm">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center lg:text-left">
              Join the CLO Community
            </h3>

            <p className="text-gray-700 mt-2 text-center lg:text-left">
              Get early access to new launches & exclusive offers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[340px] h-14 rounded-2xl border border-gray-300/70 px-5 outline-none bg-white/70 focus:border-black transition"
            />

            <button className="bg-black text-white px-8 h-14 rounded-2xl hover:scale-105 hover:opacity-90 transition duration-300 w-full sm:w-auto shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        {/* ABOUT */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-6 uppercase tracking-wide">
            About CLO
          </h3>

          <p className="text-sm md:text-base text-gray-700 leading-7 mb-6">
            Premium fashion brand delivering modern Indian & global styles with
            elegance, comfort, and timeless aesthetics.
          </p>

          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-full bg-white border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white hover:-translate-y-1 transition duration-300 shadow-sm">
              <FaInstagram size={18} />
            </div>

            <div className="w-11 h-11 rounded-full bg-white border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white hover:-translate-y-1 transition duration-300 shadow-sm">
              <FaFacebookF size={18} />
            </div>
          </div>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-6 uppercase tracking-wide">
            Explore
          </h3>

          <ul className="space-y-4 text-sm md:text-base text-gray-800">
            <li>
              <a href="/" className="hover:text-black transition duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="/" className="hover:text-black transition duration-300">
                New Launches
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="hover:text-black transition duration-300">
                About Us
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="hover:text-black transition duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* CUSTOMER CARE */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-6 uppercase tracking-wide">
            Customer Care
          </h3>

          <ul className="space-y-4 text-sm md:text-base text-gray-800">
            <li>
              <a
                href="/faqs"
                className="hover:text-black transition duration-300">
                FAQ
              </a>
            </li>

            <a href="/track-order">
              <li className="cursor-pointer hover:text-black transition duration-300">
                Track Order
              </li>
            </a>

            <li className="cursor-pointer hover:text-black transition duration-300">
              Returns / Exchange
            </li>

            <li>
              <a
                href="/terms-condition"
                className="hover:text-black transition duration-300">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-6 uppercase tracking-wide">
            Information
          </h3>

          <ul className="space-y-4 text-sm md:text-base text-gray-800">
            <li className="cursor-pointer hover:text-black transition duration-300">
              Privacy Policy
            </li>

            <li className="cursor-pointer hover:text-black transition duration-300">
              Shipping Policy
            </li>

            <li className="cursor-pointer hover:text-black transition duration-300">
              Size Guide
            </li>

            <li className="cursor-pointer hover:text-black transition duration-300">
              Careers
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-6 uppercase tracking-wide">
            Contact
          </h3>

          <div className="space-y-5 text-sm md:text-base text-gray-800 leading-7">
            <p>+91 7042727387</p>
            <p>info@clo.co.in</p>
            <p>2nd Floor, XYZ Building, Delhi</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-400/50 pt-6 text-center text-sm md:text-base text-gray-700 tracking-wide">
        © 2026 CLO Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
