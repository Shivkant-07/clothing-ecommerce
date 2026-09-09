
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../../data/products";

const SearchBar = ({ open, onClose }) => {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const searchText = query.toLowerCase();

    return (
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    );
  });

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="absolute left-0 right-0 top-full z-40 border-t border-black/10 bg-white shadow-lg"
        >
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-10">

            {/* Search Input */}
            <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-5 py-3">
              <Search
                size={20}
                className="shrink-0 text-gray-400"
              />

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                placeholder="Search products..."
                className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close search"
                className="rounded-full p-1 text-gray-500 transition hover:bg-gray-200 hover:text-black"
              >
                <X size={18} />
              </button>
            </div>

            {/* Search Results */}
            {query.trim() !== "" && (
              <div className="mt-5">

                {filteredProducts.length > 0 ? (
                  <>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                      {filteredProducts.length}{" "}
                      {filteredProducts.length === 1
                        ? "result"
                        : "results"}
                    </p>

                    <div className="grid max-h-[60vh] grid-cols-1 gap-3 overflow-y-auto sm:grid-cols-2 lg:grid-cols-4">
                      {filteredProducts.slice(0, 8).map((product) => (
                        <Link
                          key={product.id}
                          to={`/categories/${product.categorySlug}`}
                          onClick={handleClose}
                          className="group flex items-center gap-3 rounded-xl border border-gray-100 p-3 transition hover:bg-gray-50"
                        >
                          <div className="h-16 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-200">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>

                          <div className="min-w-0">
                            <p className="text-xs uppercase tracking-wider text-gray-400">
                              {product.category}
                            </p>

                            <h3 className="mt-1 truncate text-sm font-medium text-gray-900">
                              {product.name}
                            </h3>

                            <p className="mt-1 text-sm font-semibold text-gray-900">
                              ₹{product.price.toLocaleString("en-IN")}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {filteredProducts.length > 8 && (
                      <p className="mt-4 text-center text-xs text-gray-400">
                        Showing first 8 results
                      </p>
                    )}
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <Search
                      size={30}
                      strokeWidth={1.3}
                      className="mx-auto text-gray-300"
                    />

                    <p className="mt-3 text-sm font-medium text-gray-900">
                      No products found
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Try searching for shirts, shoes, bags, etc.
                    </p>
                  </div>
                )}

              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchBar;
