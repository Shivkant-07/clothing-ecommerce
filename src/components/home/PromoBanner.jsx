import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-black"
        >
          {/* Background Image */}
          <img
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="VELORA fashion collection"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-1000 hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative flex min-h-[480px] flex-col justify-center px-7 py-16 sm:px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-xl"
            >
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                Limited Time
              </span>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your Style.
                <span className="block font-light italic">
                  Your Statement.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/70 sm:text-base">
                Refresh your wardrobe with timeless pieces crafted for
                effortless everyday style.
              </p>

              <motion.a
                href="/new-arrivals"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-gray-100"
              >
                Shop Collection
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;
