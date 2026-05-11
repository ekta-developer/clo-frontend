import React from "react";

import {
  FaShieldAlt,
  FaUndoAlt,
  FaTruck,
  FaLock,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#c8c3be] pt-16 pb-8 px-6 md:px-12 lg:px-20">
      {/* TOP FEATURES */}
      <div className="border border-[#7d6240] rounded-3xl px-6 py-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <FaShieldAlt className="text-[#b18d43] text-xl" />
            <span className="text-sm md:text-base text-gray-700 ">
              Secure Shopping
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaUndoAlt className="text-[#b18d43] text-xl" />
            <span className="text-sm md:text-base text-gray-">
              Easy 7-Day Returns
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaTruck className="text-[#b18d43] text-xl" />
            <span className="text-sm md:text-base text-gray-700">
              Free Shipping ₹999+
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaLock className="text-[#b18d43] text-xl" />
            <span className="text-sm md:text-base text-gray-700">
              100% Secure Payments
            </span>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="rounded-3xl px-6 py-8 mb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <h3 className="text-xl md:text-lg font-medium text-gray-800 text-center lg:text-left">
            Get early access to new launches & offers
          </h3>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-100 h-14 rounded-xl border border-gray-300 px-5 outline-none bg-transparent"
            />

            <button className="bg-black text-white px-8 h-14 rounded-xl hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* ABOUT */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-5 uppercase">
            About CLO
          </h3>

          <p className="text-sm md:text-base text-gray-700 leading-8 mb-6">
            Premium fashion brand delivering modern Indian & global styles.
          </p>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition">
              <FaInstagram size={20} />
            </div>

            <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition">
              <FaFacebookF size={20} />
            </div>

            {/* <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition">
              <FaXTwitter size={18} />
            </div> */}
          </div>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-5 uppercase">
            Explore
          </h3>

          <ul className="space-y-3 text-sm md:text-base text-gray-800">
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">New Launches</li>
            <li className="cursor-pointer hover:text-black">About Us</li>
            <li className="cursor-pointer hover:text-black">Contact Us</li>
          </ul>
        </div>

        {/* CUSTOMER CARE */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-5 uppercase">
            Customer Care
          </h3>

          <ul className="space-y-3 text-sm md:text-base text-gray-800">
            <li>FAQ</li>
            <li>Track Order</li>
            <li>Returns / Exchange</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-5 uppercase">
            Information
          </h3>

          <ul className="space-y-3 text-sm md:text-base text-gray-800">
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Size Guide</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-5 uppercase">
            Contact & Partners
          </h3>

          <div className="space-y-4 text-gray-800">
            <p>📞 +91 7042727387</p>
            <p>✉️ info@clo.co.in</p>
            <p>📍 2nd Floor, XYZ Building, Delhi</p>
          </div>

          {/* PAYMENT ICONS */}
          {/* <div className="flex gap-3 mt-6">
            <div className="w-12 h-8 bg-gray-300 rounded"></div>
            <div className="w-12 h-8 bg-gray-300 rounded"></div>
            <div className="w-12 h-8 bg-gray-300 rounded"></div>
          </div> */}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-400 pt-6 text-center text-gray-600">
        © 2026 CLO Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
