import { Search } from "lucide-react";
import { useState } from "react";

const NavbarSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="relative flex items-center gap-2">
      {/* Only Lens Clickable */}
      <button onClick={() => setShowSearch(!showSearch)}>
        <Search size={20} />
      </button>

      {/* Replace Text with Input */}
      {showSearch ? (
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="text-sm uppercase tracking-wider border-b border-black outline-none bg-transparent w-28 transition-all duration-300"
          autoFocus
        />
      ) : (
        <span className="hidden md:block text-sm uppercase tracking-wider">
          Search
        </span>
      )}
    </div>
  );
};

export default NavbarSearch;
