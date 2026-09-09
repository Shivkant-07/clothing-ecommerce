import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ProductCard from "../common/ProductCard";
import products from "../../data/products";

const FeaturedProducts = () => {
  const newProducts = products
    .filter((product) => product.isNew)
    .slice(0, 4);

  return (
    <section
      id="new-arrivals"
      className="bg-[#f8f7f4] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Fresh Picks
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              New Arrivals
            </h2>
          </div>

          <Link
            to="/new-arrivals"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-black"
          >
            View all products
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;