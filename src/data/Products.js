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
  },
];
