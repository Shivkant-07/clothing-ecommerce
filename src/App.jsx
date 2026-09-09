import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProductCard from "./components/common/ProductCard";

import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";

import products from "./data/products";


// ===============================
// Category Products Page
// ===============================

function CategoryProducts({ category }) {
  const categoryProducts = products.filter(
    (product) => product.categorySlug === category.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-[#f8f7f4] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
          VELORA Collection
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {category}
        </h1>

        <p className="mt-4 text-gray-500">
          Explore our {category.toLowerCase()} collection.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <p className="mt-12 text-gray-500">
            No products available in this category.
          </p>
        )}

      </div>
    </main>
  );
}


// ===============================
// New Arrivals Page
// ===============================

function NewArrivalsPage() {
  const newProducts = products.filter(
    (product) => product.isNew
  );

  return (
    <main className="min-h-screen bg-[#f8f7f4] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
          Fresh Picks
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          New Arrivals
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </main>
  );
}


// ===============================
// Trending Products Page
// ===============================

function TrendingPage() {
  const trendingProducts = products.filter(
    (product) => product.isTrending
  );

  return (
    <main className="min-h-screen bg-[#f8f7f4] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
          Most Wanted
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Trending Now
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </main>
  );
}


// ===============================
// App
// ===============================

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Categories */}
        <Route
          path="/categories"
          element={<Categories />}
        />

        {/* Category Products */}
        <Route
          path="/categories/men"
          element={
            <CategoryProducts category="Men" />
          }
        />

        <Route
          path="/categories/women"
          element={
            <CategoryProducts category="Women" />
          }
        />

        <Route
          path="/categories/shoes"
          element={
            <CategoryProducts category="Shoes" />
          }
        />

        <Route
          path="/categories/accessories"
          element={
            <CategoryProducts category="Accessories" />
          }
        />

        {/* New Arrivals */}
        <Route
          path="/new-arrivals"
          element={<NewArrivalsPage />}
        />

        {/* Trending */}
        <Route
          path="/trending"
          element={<TrendingPage />}
        />

        {/* Wishlist */}
        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;