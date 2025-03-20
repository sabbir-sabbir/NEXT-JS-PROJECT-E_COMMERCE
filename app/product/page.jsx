"use client";
import React, { useContext, useState } from "react";
import { AllContext } from "@/app/context/ContextAPI";
import Link from "next/link";
import Loading from "./Loading";
import Pagination from "../components/pagination/pagination";

export default function ProductPage() {
  const { products, loading, inputValue } = useContext(AllContext);

  const [showPerPage, setShowPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const paginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  let FilterProduct = products.filter((curValue) => {
    return curValue.title.toLowerCase().includes(inputValue);
  });
  return (
    <>
    <div className="w-full bg-sky-300/25 backdrop-blur-3xl  my-3 py-4 px-12">
        <Pagination
          showPerPage={showPerPage}
          paginationChange={paginationChange}
          total={FilterProduct.length}
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="product-container">
          {FilterProduct.slice(pagination.start, pagination.end).map((item) => (
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
