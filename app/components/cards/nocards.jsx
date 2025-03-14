'use client'
import Lottie from "lottie-react"
import animationData from "@/public/nocard.json";
export default function NoCards(){
    return (
        <>
         <div className="w-full h-full flex flex-col justify-center items-center">
    <Lottie loop={true} animationData={animationData}  className=" mt-44 w-60 h-60" />
    <div className="flex items-center gap-3"><h2 className=" items-center gap-2 text-2xl text-zinc-500 mt-2 pb-2 border-b-2 border-rose-400">NO CARD ADDED</h2>
    <span><button className="px-2 py-1 rounded-sm bg-blue-500 hover:bg-gray-500 text-white " onClick={()=> window.history.back()}>BACK</button></span>
    </div>
    </div>
        </>
    )
}