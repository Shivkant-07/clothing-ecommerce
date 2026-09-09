import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Men",
    description: "Modern essentials for every occasion",
    slug: "men",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Women",
    description: "Effortless styles made to stand out",
    slug: "women",
    image:
      "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Shoes",
    description: "Step into comfort and confidence",
    slug: "shoes",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Accessories",
    description: "The finishing touch to your style",
    slug: "accessories",
    image:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

const Categories = () => {
  return (
    <main className="bg-[#f8f7f4]">
      {/* Page Header */}
      <section className="px-5 pb-14 pt-16 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Explore VELORA
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
              Find your
              <span className="font-light italic"> style.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Explore our curated collections and discover pieces designed
              for modern everyday living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2">
          {categories.map((category, index) => (
            <motion.a
              key={category.slug}
              href={`/categories/${category.slug}`}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[1.75rem] bg-gray-200"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden sm:aspect-[5/4]">
                <img
                  src={category.image}
                  alt={`${category.name} fashion collection`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 sm:p-8">
                <div>
                  <p className="mb-2 text-xs text-white/70">
                    {category.description}
                  </p>

                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    {category.name}
                  </h2>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={21} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Categories;