import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import TrendingProducts from "../../components/home/TrendingProducts";
import PromoBanner from "../../components/home/PromoBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <TrendingProducts />
      <PromoBanner />
    </>
  );
};

export default Home;