const products = [
  // ==================== MEN ====================
  {
    id: 1,
    name: "Classic Overshirt",
    category: "Men",
    categorySlug: "men",
    price: 2499,
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: false,
  },
  {
    id: 2,
    name: "Premium Casual Shirt",
    category: "Men",
    categorySlug: "men",
    price: 1999,
    image:
      "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: false,
  },
  {
    id: 3,
    name: "Relaxed Fit T-Shirt",
    category: "Men",
    categorySlug: "men",
    price: 1499,
    image:
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: true,
  },
  {
    id: 4,
    name: "Urban Street Jacket",
    category: "Men",
    categorySlug: "men",
    price: 2999,
    image:
      "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: true,
  },
  {
    id: 5,
    name: "Slim Fit Polo",
    category: "Men",
    categorySlug: "men",
    price: 1799,
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: false,
  },
  {
    id: 6,
    name: "Linen Summer Shirt",
    category: "Men",
    categorySlug: "men",
    price: 2299,
    image:
      "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: true,
  },
  {
    id: 7,
    name: "Classic Denim Jacket",
    category: "Men",
    categorySlug: "men",
    price: 3299,
    image:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: true,
  },
  {
    id: 8,
    name: "Minimal Black Shirt",
    category: "Men",
    categorySlug: "men",
    price: 1899,
    image:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: false,
  },

  // ==================== WOMEN ====================
  {
    id: 9,
    name: "Essential Blazer",
    category: "Women",
    categorySlug: "women",
    price: 3999,
    image:
      "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: true,
  },
  {
    id: 10,
    name: "Oversized Blazer",
    category: "Women",
    categorySlug: "women",
    price: 3499,
    image:
      "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: true,
  },
  {
    id: 11,
    name: "Elegant Summer Dress",
    category: "Women",
    categorySlug: "women",
    price: 2999,
    image:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: false,
  },
  {
    id: 12,
    name: "Minimal White Dress",
    category: "Women",
    categorySlug: "women",
    price: 2799,
    image:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: true,
  },
  {
    id: 13,
    name: "Classic Casual Top",
    category: "Women",
    categorySlug: "women",
    price: 1599,
    image:
      "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: false,
  },
  {
    id: 14,
    name: "Relaxed Knit Sweater",
    category: "Women",
    categorySlug: "women",
    price: 2199,
    image:
      "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: false,
  },
  {
    id: 15,
    name: "Modern Denim Look",
    category: "Women",
    categorySlug: "women",
    price: 2499,
    image:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: true,
  },
  {
    id: 16,
    name: "Elegant Evening Outfit",
    category: "Women",
    categorySlug: "women",
    price: 4299,
    image:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: true,
  },

  // ==================== SHOES ====================
  {
    id: 17,
    name: "Minimal Sneakers",
    category: "Shoes",
    categorySlug: "shoes",
    price: 2999,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: true,
  },
  {
    id: 18,
    name: "Classic White Sneakers",
    category: "Shoes",
    categorySlug: "shoes",
    price: 2799,
    image:
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: true,
  },
  {
    id: 19,
    name: "Urban Running Shoes",
    category: "Shoes",
    categorySlug: "shoes",
    price: 3499,
    image:
      "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: false,
  },
  {
    id: 20,
    name: "Classic Leather Shoes",
    category: "Shoes",
    categorySlug: "shoes",
    price: 3999,
    image:
      "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: false,
  },
  {
    id: 21,
    name: "Casual Canvas Shoes",
    category: "Shoes",
    categorySlug: "shoes",
    price: 1899,
    image:
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: false,
  },
  {
    id: 22,
    name: "Premium Sport Sneakers",
    category: "Shoes",
    categorySlug: "shoes",
    price: 3299,
    image:
      "https://images.pexels.com/photos/1456733/pexels-photo-1456733.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: true,
  },
  {
    id: 23,
    name: "Everyday Slip Ons",
    category: "Shoes",
    categorySlug: "shoes",
    price: 1699,
    image:
      "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: false,
  },
  {
    id: 24,
    name: "Premium Black Sneakers",
    category: "Shoes",
    categorySlug: "shoes",
    price: 3199,
    image:
      "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: true,
  },

  // ==================== ACCESSORIES ====================
  {
    id: 25,
    name: "Classic Leather Bag",
    category: "Accessories",
    categorySlug: "accessories",
    price: 2499,
    image:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: true,
  },
  {
    id: 26,
    name: "Minimal Leather Wallet",
    category: "Accessories",
    categorySlug: "accessories",
    price: 1299,
    image:
      "https://images.pexels.com/photos/1152078/pexels-photo-1152078.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: false,
  },
  {
    id: 27,
    name: "Classic Wrist Watch",
    category: "Accessories",
    categorySlug: "accessories",
    price: 2999,
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: true,
  },
  {
    id: 28,
    name: "Premium Sunglasses",
    category: "Accessories",
    categorySlug: "accessories",
    price: 1799,
    image:
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: true,
  },
  {
    id: 29,
    name: "Everyday Backpack",
    category: "Accessories",
    categorySlug: "accessories",
    price: 2299,
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: false,
  },
  {
    id: 30,
    name: "Minimal Belt",
    category: "Accessories",
    categorySlug: "accessories",
    price: 999,
    image:
      "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: false,
  },
  {
    id: 31,
    name: "Classic Cap",
    category: "Accessories",
    categorySlug: "accessories",
    price: 799,
    image:
      "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: true,
    isTrending: false,
  },
  {
    id: 32,
    name: "Premium Shoulder Bag",
    category: "Accessories",
    categorySlug: "accessories",
    price: 2799,
    image:
      "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=900",
    isNew: false,
    isTrending: true,
  },
];

export default products;