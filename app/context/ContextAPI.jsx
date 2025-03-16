"use client";

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AllContext = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("carts")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("carts", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://dummyjson.com/products?limit=100");
        setProducts(response.data.products.reverse());
        } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getData = (e) => {
    setInputValue(e.target.value.trim());
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  return (
    <AllContext.Provider value={{ products, loading, getData, inputValue, cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </AllContext.Provider>
  );
};
