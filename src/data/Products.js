/// src/data/Products.js

import img1 from "../assets/banner1.webp";
import img2 from "../assets/banner2.webp";
import img3 from "../assets/banner3.webp";

export const Products = [
  {
    id: 1,
    slug: "wine-banarasi-saree",
    title: "Wine Banarasi Saree",
    category: "Banarasi",
    price: 3499,
    oldPrice: 4999,
    fabric: "Pure Banarasi Silk",
    description:
      "Elegant wine banarasi saree crafted with luxurious silk and timeless weaving.",
    images: [img1, img2, img3],

    colors: [
      {
        name: "Wine",
        code: "#722F37",
      },

      {
        name: "Maroon",
        code: "#5e1914",
      },
    ],

    sizes: ["XS", "S", "M", "L", "XL"],

    stock: 20,

    rating: 4.8,
  },

  {
    id: 2,
    slug: "red-silk-saree",
    title: "Red Silk Saree",
    category: "Silk Saree",
    price: 2899,
    oldPrice: 3999,
    fabric: "Soft Silk",
    description:
      "Traditional red silk saree with premium texture and rich pallu detailing.",
    images: [img2, img1, img3],

    colors: [
      {
        name: "Red",
        code: "#b91c1c",
      },

      {
        name: "Pink",
        code: "#ec4899",
      },
    ],

    sizes: ["S", "M", "L"],

    stock: 15,

    rating: 4.5,
  },

  {
    id: 3,
    slug: "royal-gold-saree",
    title: "Royal Gold Saree",
    category: "Wedding Collection",
    price: 5999,
    oldPrice: 7999,
    fabric: "Kanjivaram Silk",
    description:
      "Royal gold saree designed for weddings and festive occasions.",
    images: [img3, img1, img2],

    colors: [
      {
        name: "Gold",
        code: "#d4af37",
      },

      {
        name: "Beige",
        code: "#d6c6a5",
      },
    ],

    sizes: ["M", "L", "XL"],

    stock: 10,

    rating: 5,
  },

  {
    id: 4,
    slug: "ivory-anarkali-set",
    title: "Ivory Anarkali Set",
    category: "Anarkali",
    price: 4599,
    oldPrice: 6499,
    fabric: "Chanderi Silk",
    description:
      "Graceful ivory anarkali set with hand embroidery and dupatta.",
    images: [img1, img2, img3],

    colors: [
      {
        name: "Ivory",
        code: "#f8f4e8",
      },

      {
        name: "Cream",
        code: "#fffdd0",
      },
    ],

    sizes: ["XS", "S", "M", "L"],

    stock: 12,

    rating: 4.7,
  },

  {
    id: 5,
    slug: "emerald-party-gown",
    title: "Emerald Party Gown",
    category: "Party Wear",
    price: 6999,
    oldPrice: 8999,
    fabric: "Net & Satin",
    description:
      "Premium emerald gown perfect for receptions and cocktail nights.",
    images: [img2, img3, img1],

    colors: [
      {
        name: "Emerald",
        code: "#046307",
      },

      {
        name: "Black",
        code: "#000000",
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    stock: 8,

    rating: 4.9,
  },
];
