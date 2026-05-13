import { useEffect, useState } from "react";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import NavbarSearch from "./NavbarSearch";

const menuItems = [
  "Sale",
  "Spring Summer 2026",
  "Shop By Categories",
  "Special Offer",
  "What's New",
  "CLO Collection",
  "Store Locator",
  "Track Your Order",
  "Raise Return",
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when menu opens
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Topbar */}
      <Topbar hidden={isScrolled} />

      {/* Header */}
      <header
        className={`fixed left-0 z-40 w-full bg-white text-black shadow-sm transition-all duration-300 ${
          isScrolled ? "top-0" : "top-10"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center gap-6">
              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
              >
                <Menu size={22} />
                <span className="hidden md:block">Menu</span>
              </button>

              {/* Search */}
              <NavbarSearch />
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="text-3xl font-bold tracking-wide md:text-4xl"
              style={{ fontFamily: "serif" }}
            >
              CLO
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-5 md:gap-6">
              <Link
                to="/contact"
                className="hidden text-sm uppercase tracking-wider lg:block"
              >
                Contact Us
              </Link>

              <Link
                to="/account/login"
                aria-label="Account login"
                className="flex items-center justify-center"
              >
                <User size={22} />
              </Link>

              <Link to="/wishlist">
                <Heart size={22} />
              </Link>

              <Link to="/cart">
                <ShoppingBag size={22} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Side Canvas Menu */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[320px] bg-[#f8f4ef] shadow-2xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <h2
            className="text-2xl font-semibold tracking-wide"
            style={{ fontFamily: "serif" }}
          >
            CLO
          </h2>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full p-1 transition hover:bg-black/5"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu List */}
        <div className="hide-scrollbar flex h-[calc(100%-80px)] flex-col justify-between overflow-y-auto">
          <div className="px-6 py-5">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-gray-200 py-4 text-[15px] uppercase tracking-wide"
                  >
                    <span>{item}</span>

                    <ChevronRight
                      size={18}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 px-6 py-5">
            <p className="text-sm text-gray-500">© 2026 CLO Fashion House</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
