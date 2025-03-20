"use client"
import Customers from "./components/customer/Customers";
import Delivery from "./components/delivery/Delivery";
import Navbar from "./components/navbar/page";
import Shop from "./components/shop/page";
import ProductPage from "./product/page";


export default function Home(){
  return (
    <>
    <Navbar/>
   <ProductPage/>
   <Shop/>
   <Delivery/>
   <Customers/>
    </>
  )
}