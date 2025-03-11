"use client";

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const AllContext = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setCategory(response.data)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <AllContext.Provider value={{ products }}>
      {children}
    </AllContext.Provider>
  );
};
