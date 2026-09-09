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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "#categories" },
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Trending", href: "#trending" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold tracking-[0.2em] text-black sm:text-3xl"
        >
          VELORA
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-black"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button
            aria-label="Search"
            className="rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          <button
            aria-label="Account"
            className="hidden rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100 sm:block"
          >
            <User size={20} strokeWidth={1.8} />
          </button>

          <button
            aria-label="Wishlist"
            className="hidden rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100 sm:block"
          >
            <Heart size={20} strokeWidth={1.8} />
          </button>

          <button
            aria-label="Shopping bag"
            className="relative rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100"
          >
            <ShoppingBag size={20} strokeWidth={1.8} />

            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-semibold text-white">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full p-2.5 transition-all duration-300 hover:bg-gray-100 lg:hidden"
          >
            {menuOpen ? (
              <X size={23} strokeWidth={1.8} />
            ) : (
              <Menu size={23} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/10 bg-white lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: -15, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-black/5 py-4 text-sm font-medium text-gray-700 transition-colors hover:text-black"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex gap-2 pt-4 sm:hidden">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-200 py-3 text-sm">
                  <User size={17} />
                  Account
                </button>

                <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-200 py-3 text-sm">
                  <Heart size={17} />
                  Wishlist
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;