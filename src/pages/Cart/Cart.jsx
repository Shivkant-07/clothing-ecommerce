
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

import { useShop } from "../../context/ShopContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShop();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal === 0 || subtotal >= 2000 ? 0 : 99;

  const total = subtotal + shipping;

  // Empty Cart
  if (cart.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f8f7f4] px-5">
        <div className="text-center">
          <ShoppingBag
            size={48}
            strokeWidth={1.3}
            className="mx-auto text-gray-400"
          />

          <h1 className="mt-5 text-3xl font-semibold text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Looks like you haven't added anything yet.
          </p>

          <Link
            to="/categories"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <ShoppingBag size={17} />
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f7f4] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Your Selection
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Shopping Cart
          </h1>

          <p className="mt-3 text-gray-500">
            {cart.reduce((total, item) => total + item.quantity, 0)}{" "}
            {cart.reduce((total, item) => total + item.quantity, 0) === 1
              ? "item"
              : "items"}{" "}
            in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">

          {/* Cart Items */}
          <div className="space-y-5">
            {cart.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex gap-4 rounded-2xl bg-white p-4 sm:gap-6 sm:p-5"
              >
                {/* Product Image */}
                <div className="h-32 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-200 sm:h-40 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex min-w-0 flex-1 flex-col justify-between">

                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-400">
                          {item.category}
                        </p>

                        <h2 className="mt-1 text-sm font-semibold text-gray-900 sm:text-base">
                          {item.name}
                        </h2>
                      </div>

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-red-500"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">

                    {/* Quantity */}
                    <div className="flex items-center rounded-full border border-gray-200">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:text-black"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:text-black"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>

                      {item.quantity > 1 && (
                        <p className="mt-1 text-xs text-gray-400">
                          ₹{item.price.toLocaleString("en-IN")} each
                        </p>
                      )}
                    </div>

                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-28 rounded-2xl bg-white p-6 sm:p-7">

              <h2 className="text-xl font-semibold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 text-sm">

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-medium text-gray-900">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Shipping
                  </span>

                  <span className="font-medium text-gray-900">
                    {shipping === 0
                      ? "Free"
                      : `₹${shipping.toLocaleString("en-IN")}`}
                  </span>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-lg font-semibold text-gray-900">
                      ₹{total.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

              </div>

              {subtotal < 2000 && (
                <p className="mt-5 rounded-xl bg-[#f8f7f4] p-3 text-xs leading-5 text-gray-500">
                  Add ₹{(2000 - subtotal).toLocaleString("en-IN")} more to
                  get free shipping.
                </p>
              )}

              <button
                type="button"
                className="mt-6 w-full rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/categories"
                className="mt-3 flex w-full items-center justify-center rounded-full border border-gray-200 px-6 py-3.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
              >
                Continue Shopping
              </Link>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Cart;


