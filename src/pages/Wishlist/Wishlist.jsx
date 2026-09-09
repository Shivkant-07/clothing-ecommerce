import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

import { useShop } from "../../context/ShopContext";

const Wishlist = () => {
  const {
    wishlist,
    toggleWishlist,
    addToCart,
  } = useShop();

  if (wishlist.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f8f7f4] px-5">
        <div className="text-center">
          <Heart
            size={45}
            strokeWidth={1.3}
            className="mx-auto text-gray-400"
          />

          <h1 className="mt-5 text-3xl font-semibold text-gray-900">
            Your Wishlist is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Save your favorite products here.
          </p>

          <Link
            to="/categories"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <ShoppingBag size={17} />
            Explore Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f7f4] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Your Favorites
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Wishlist
          </h1>

          <p className="mt-3 text-gray-500">
            {wishlist.length}{" "}
            {wishlist.length === 1 ? "item" : "items"} saved
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((product) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-200">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  aria-label={`Remove ${product.name} from wishlist`}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition hover:scale-105"
                >
                  <Trash2 size={17} />
                </button>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                  <ShoppingBag size={17} />
                  Add to Cart
                </button>
              </div>

              <div className="pt-4">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {product.category}
                </p>

                <div className="mt-1 flex items-start justify-between gap-3">
                  <h2 className="text-sm font-medium text-gray-900 sm:text-base">
                    {product.name}
                  </h2>

                  <p className="whitespace-nowrap text-sm font-semibold text-gray-900">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Wishlist;