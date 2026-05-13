/// src/context/ProductContext.jsx

import { createContext, useContext, useState } from "react";
import { Products } from "../data/Products";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Cart State
  const [cartItems, setCartItems] = useState([]);

  // Order State
  const [orders, setOrders] = useState([]);

  // Add To Cart
  const addToCart = (product, selectedSize, selectedColor, quantity = 1) => {
    const existingItem = cartItems.find(
      (item) =>
        item.id === product.id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor,
    );

    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        ),
      );
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          ...product,
          selectedSize,
          selectedColor,
          quantity,
        },
      ]);
    }
  };

  // Remove Item
  const removeFromCart = (id, size, color) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedSize === size &&
            item.selectedColor === color
          ),
      ),
    );
  };

  // Update Quantity
  const updateQuantity = (id, size, color, type) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (
          item.id === id &&
          item.selectedSize === size &&
          item.selectedColor === color
        ) {
          return {
            ...item,
            quantity:
              type === "inc"
                ? item.quantity + 1
                : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
          };
        }

        return item;
      }),
    );
  };

  // Cart Total
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // Place Order
  const placeOrder = (shippingData, paymentData) => {
    const newOrder = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      shippingData,
      paymentData,
      total: cartTotal,
      createdAt: new Date(),
    };

    setOrders((prev) => [...prev, newOrder]);

    // Clear cart
    setCartItems([]);

    return newOrder;
  };

  return (
    <ProductContext.Provider
      value={{
        Products,

        // cart
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,

        // orders
        orders,
        placeOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
