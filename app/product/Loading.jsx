'use client'
import React from 'react'
import Lottie from 'lottie-react';
import animationData from "@/public/load.json";


const Loading = () => {
  return (
    <>
    <div className="w-full h-full flex justify-center items-center">
    <Lottie loop={true} animationData={animationData}  className="w-60 h-60" />
    </div>
    </>
  )
}

export default Loading