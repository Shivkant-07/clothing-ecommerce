
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";

import { useShop } from "../../context/ShopContext";

const ProductCard = ({ product }) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useShop();

  const liked = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-200">

        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Trending */}
        {product.isTrending && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-900 shadow-sm">
            Trending
          </span>
        )}

        {/* New */}
        {product.isNew && (
          <span className="absolute bottom-4 left-4 rounded-full bg-black px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            New
          </span>
        )}

        {/* Wishlist */}
        <motion.button
          type="button"
          onClick={handleWishlist}
          whileTap={{ scale: 0.85 }}
          aria-label={
            liked
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 hover:scale-110 ${
            liked ? "text-red-500" : "text-gray-700"
          }`}
        >
          <Heart
            size={19}
            strokeWidth={1.8}
            fill={liked ? "currentColor" : "none"}
          />
        </motion.button>

        {/* Add To Cart */}
        <motion.button
          type="button"
          onClick={handleAddToCart}
          whileTap={{ scale: 0.96 }}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-gray-800 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
        >
          <ShoppingBag size={17} />
          Add to Cart
        </motion.button>
      </div>

      {/* Product Details */}
      <div className="pt-4">

        <p className="text-xs uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

        <div className="mt-1 flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium text-gray-900 sm:text-base">
            {product.name}
          </h3>

          <p className="whitespace-nowrap text-sm font-semibold text-gray-900">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>

      </div>
    </motion.article>
  );
};

export default ProductCard;
