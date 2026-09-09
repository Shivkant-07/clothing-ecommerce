import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

const trendingProducts = [
  {
    id: 1,
    name: "Relaxed Fit T-Shirt",
    category: "Men",
    price: "₹1,499",
    image:
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 2,
    name: "Oversized Blazer",
    category: "Women",
    price: "₹3,499",
    image:
      "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 3,
    name: "Urban Street Jacket",
    category: "Men",
    price: "₹2,999",
    image:
      "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 4,
    name: "Classic Leather Bag",
    category: "Accessories",
    price: "₹2,499",
    image:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const TrendingProducts = () => {
  return (
    <section id="trending" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Most Wanted
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Trending Now
            </h2>
          </div>

          <a
            href="/trending"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-black"
          >
            Explore trending
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                {/* Product Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Trending Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-900 shadow-sm">
                  Trending
                </span>

                {/* Wishlist */}
                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-black"
                >
                  <Heart size={18} strokeWidth={1.8} />
                </button>
              </div>

              {/* Product Info */}
              <div className="pt-4">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {product.category}
                </p>

                <div className="mt-1 flex items-start justify-between gap-3">
                  <h3 className="text-sm font-medium text-gray-900 sm:text-base">
                    {product.name}
                  </h3>

                  <p className="whitespace-nowrap text-sm font-semibold text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;