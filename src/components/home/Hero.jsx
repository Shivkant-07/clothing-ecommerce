import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[#f5f3ef]">
            <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-16">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="z-10 max-w-xl"
                >
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        New Season · 2026
                    </p>

                    <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                        Wear Your
                        <span className="block font-light italic">
                            Confidence.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-md text-base leading-7 text-gray-600 sm:text-lg">
                        Discover timeless pieces designed for modern living.
                        Elevate your everyday style with VELORA.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <motion.a
                            href="#new-arrivals"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                        >
                            Shop New Arrivals

                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </motion.a>

                        <motion.a
                            href="#categories"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
                        >
                            Explore Collection
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative mx-auto aspect-[4/5] max-w-lg overflow-hidden rounded-[2rem] bg-gray-200">
                        <img
                            src="https://images.pexels.com/photos/26936522/pexels-photo-26936522.jpeg?cs=srgb&dl=pexels-marlonretratos-26936522.jpg&fm=jpg"
                            alt="VELORA men's fashion collection"
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur-sm"
                        >
                            <p className="text-xs uppercase tracking-wider text-gray-500">
                                Curated for you
                            </p>

                            <p className="mt-1 text-sm font-semibold text-gray-900">
                                Effortless. Timeless. You.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;