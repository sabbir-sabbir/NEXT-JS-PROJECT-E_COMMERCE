"use client"; 

import { useParams } from "next/navigation"; 
import { useEffect, useContext, useState } from "react";
import { AllContext } from "@/app/context/ContextAPI";
import axios from "axios";
import Loading from "../Loading";
import { AiOutlineRollback } from "react-icons/ai";

export default function ProductDetails() {
 const {addToCart} = useContext(AllContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    if (!id) return; 

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(response.data)
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loading/>
  if (!product) return <div>Product Not Found</div>;

  return (
    <>
    <div className="product-details-container">
        
        <div className="product-details-card">
        <div className="d-title-div"><h2 className="d-title-text">{product.title}</h2></div>
        <div><img className="d-img" src={product.thumbnail} alt={product.title} /></div>
        </div>

        <div className="desc-container">
        <div className="back-btn">
          <button className="flex items-center gap-2 " onClick={()=> window.history.back()}> <span><AiOutlineRollback/></span> Back</button>
        </div>
          <div className="desc-wrapper"><h2 className="desc-text ">{product.description}</h2></div>
          <div className="other-details"><p className="other-details-text">Brand: {product.brand}</p></div>
          <div className="other-details"><p className="other-details-text"> Price: ${product.price}</p></div>
          <div className="other-details"><p className="other-details-text">Rating: ⭐{product.rating}</p></div>
          <div className="other-details"><p className="other-details-text">Availability: {product.availabilityStatus}</p></div>
          <div className="other-details"><p className="other-details-text">ReturnPolicy: {product.returnPolicy}</p></div>
          <button onClick={() => addToCart(product)} className="add-card">
            Add to Cart
          </button>

        </div>
      
          
    </div>
    </>
  );
}
