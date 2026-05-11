import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Topbar hidden={isScrolled} />

      <header
        className={`fixed left-0 z-40 w-full bg-white text-black shadow-sm transition-all duration-300 ${
          isScrolled ? "top-0" : "top-10"
        }`}>
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex h-14 items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center gap-8">
              <Link
                to="/sidemenu"
                className="flex items-center gap-2 text-sm uppercase tracking-wider">
                <Menu size={22} />
                <span className="hidden md:block">Menu</span>
              </Link>

              <Link
                to="/search"
                className="flex items-center gap-2 text-sm uppercase tracking-wider">
                <Search size={20} />
                <span className="hidden md:block">Search</span>
              </Link>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="text-3xl font-bold md:text-4xl"
              style={{ fontFamily: "serif" }}>
              CLO
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              <Link
                to="/contact"
                className="hidden text-sm uppercase tracking-wider lg:block">
                Contact Us
              </Link>

              <Link
                to="/account/login"
                aria-label="Account login"
                className="flex items-center justify-center">
                <User size={22} />
              </Link>

              <Link to="/wishlist">
                <Heart size={22} className="cursor-pointer" />
              </Link>

              <Link to="/cart">
                <ShoppingBag size={22} className="cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
