
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useShop } from "../../context/ShopContext";
import SearchBar from "../common/Searchbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { cartCount, wishlistCount } = useShop();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Trending", href: "/trending" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setMenuOpen(false);
  };

  return (
    <header className="relative sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">

      {/* Main Navbar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-[0.2em] text-black sm:text-3xl"
        >
          VELORA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="group relative text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-black"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1 sm:gap-3">

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            onClick={toggleSearch}
            className={`rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100 ${
              searchOpen ? "bg-gray-100" : ""
            }`}
          >
            {searchOpen ? (
              <X size={20} strokeWidth={1.8} />
            ) : (
              <Search size={20} strokeWidth={1.8} />
            )}
          </button>

          {/* Account */}
          <button
            type="button"
            aria-label="Account"
            className="hidden rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100 sm:block"
          >
            <User
              size={20}
              strokeWidth={1.8}
            />
          </button>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="relative rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100"
          >
            <Heart
              size={20}
              strokeWidth={1.8}
              fill={wishlistCount > 0 ? "currentColor" : "none"}
              className={
                wishlistCount > 0
                  ? "text-red-500"
                  : "text-gray-700"
              }
            />

            {wishlistCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-semibold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100"
          >
            <ShoppingBag
              size={20}
              strokeWidth={1.8}
            />

            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-semibold text-white">
              {cartCount}
            </span>
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setSearchOpen(false);
            }}
            className="rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100 lg:hidden"
          >
            {menuOpen ? (
              <X
                size={23}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={23}
                strokeWidth={1.8}
              />
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-black/10 bg-white lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8">

              {/* Navigation Links */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    x: -15,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    to={link.href}
                    onClick={closeMenu}
                    className="block border-b border-black/5 py-4 text-sm font-medium text-gray-700 transition-colors hover:text-black"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Account + Wishlist */}
              <div className="flex gap-2 pt-4 sm:hidden">

                {/* Account */}
                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-200 py-3 text-sm transition hover:bg-gray-50"
                >
                  <User size={17} />
                  Account
                </button>

                {/* Wishlist */}
                <Link
                  to="/wishlist"
                  onClick={closeMenu}
                  className="relative flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-200 py-3 text-sm transition hover:bg-gray-50"
                >
                  <Heart
                    size={17}
                    fill={
                      wishlistCount > 0
                        ? "currentColor"
                        : "none"
                    }
                    className={
                      wishlistCount > 0
                        ? "text-red-500"
                        : "text-gray-700"
                    }
                  />

                  Wishlist

                  {wishlistCount > 0 && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
              </div>

              {/* Mobile Cart */}
              <Link
                to="/cart"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-black py-3 text-sm font-medium text-white transition hover:bg-gray-800 sm:hidden"
              >
                <ShoppingBag size={17} />
                Cart ({cartCount})
              </Link>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;
