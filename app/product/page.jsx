"use client";
import React, { useContext } from "react";
import { AllContext } from "@/app/context/ContextAPI";
import Link from "next/link";
import Loading from "./Loading";

export default function ProductPage() {
  const { products, loading, inputValue } = useContext(AllContext);

  let FilterProduct = products.filter((curValue) => {
    return curValue.title.toLowerCase().includes(inputValue);
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="product-container">
          {FilterProduct.map((item) => (
            <div className="product-card" key={item.id}>
              {/* Product Image */}
              <div>
                <img
                  className="card-img"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>

              {/* Product Title */}
              <div className="card-title-div">
                <h2 className="card-text">{item.title}</h2>
              </div>

              {/* Price & Rating */}
              <div className="price-rate-container">
                <div>${item.price}</div>

                {/* Rating Section */}
                <div className="rating">
                  <span>
                    <img className="w-6 h-6" src="/star.svg" alt="Rating" />
                  </span>
                  <div>
                    <p>{item.rating || "N/A"}</p>
                  </div>
                </div>
              </div>
              <Link href={`/product/${item.id}`} className="see-more-link">
                <button className="see-more-btn">See more</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
