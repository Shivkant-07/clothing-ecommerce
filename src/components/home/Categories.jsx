import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Men",
    slug: "men",
    description: "Modern essentials for every occasion",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Women",
    slug: "women",
    description: "Effortless styles made to stand out",
    image:
      "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Shoes",
    slug: "shoes",
    description: "Step into comfort and confidence",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Accessories",
    slug: "accessories",
    description: "The finishing touch to your style",
    image:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

const Categories = () => {
  return (
    <section
      id="categories"
      className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Shop by style
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore Categories
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
            >
              <Link
                to={`/categories/${category.slug}`}
                className="group relative block overflow-hidden rounded-[1.75rem] bg-gray-200"
              >
                <div className="aspect-[4/3] overflow-hidden sm:aspect-[5/4]">
                  <img
                    src={category.image}
                    alt={`${category.name} fashion collection`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 sm:p-8">
                  <div>
                    <p className="mb-2 text-xs text-white/70">
                      {category.description}
                    </p>

                    <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={21} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;