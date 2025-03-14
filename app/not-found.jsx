'use client'
import Lottie from "lottie-react"
import animationData from "@/public/notfound.json";
export default function NotFound(){
    return (
        <>
        <div className="w-full h-full flex flex-col justify-center items-center">
    <Lottie loop={true} animationData={animationData}  className=" mt-40 w-60 h-60" />
    <span><button className="px-2 py-1 rounded-sm bg-blue-500 hover:bg-gray-500 text-white " onClick={()=> window.history.back()}>BACK</button></span>
    </div>
    
        </>
    )
}