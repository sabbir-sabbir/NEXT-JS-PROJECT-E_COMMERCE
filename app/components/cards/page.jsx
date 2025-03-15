"use client";

import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "@/app/context/ContextAPI";
import NoCards from "./nocards";


export default function CartPage() {
  const { cart, removeFromCart, addToCart, updateQuantity } = useContext(AllContext);
  
  const meanPrice = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  return (
    <>
      <div className="w-full px-5 flex justify-between items-center gap-2">
        <div className="w-full grid grid-cols-1 gap-1">
          {cart.length === 0 ? (
            <NoCards />
          ) : (
            cart.map((item) => (
              <div
                key={item.id}  
                className="w-full flex justify-start items-center px-3 py-2 gap-5 border-b-2 border-amber-300"
              >
                <div>
                  <img
                    className="w-28 h-28 object-contain mb-2"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </div>
                <div className="flex flex-col justify-start space-y-3 items-start gap-2">
                  <h2 className="text-sm md:text-2xl font-semibold">{item.title}</h2>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-2 py-0 bg-transparent border-2 border-zinc-400 text-zinc-800 rounded-sm text-lg"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-0 bg-transparent border-2 border-zinc-400 text-zinc-800 rounded-sm text-lg"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center gap-5">
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <button
                      className="bg-rose-400 text-white px-2 py-1 rounded-sm shadow-2xl hover:bg-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="mt-8 p-2 bg-gray-100 rounded-sm shadow-md text-center">
            <h2 className="text-2xl font-bold">Your Order Summary</h2>
            <p className="text-lg">
              Mean Price: <span className="font-semibold">${meanPrice.toFixed(2)}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
