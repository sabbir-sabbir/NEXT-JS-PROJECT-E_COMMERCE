"use client"
import { useState, useEffect } from "react"

export default function Pagination({showPerPage, paginationChange, total}){
    const [counter, setCounter] = useState(1);
    const [numOfBtn, setNumOfBtn] = useState(Math.ceil(total/showPerPage))

    useEffect(() => {
        setNumOfBtn(Math.ceil(total / showPerPage)); 
      }, [total, showPerPage]);

    useEffect(()=> {
          const value = counter * showPerPage;
          paginationChange(value - showPerPage, value)
    }, [counter])

    const onButtonClick =(type)=> {

        if(type === "PREVIEWS"){
              if(counter === 1){
                setCounter(1);
              } else {
                setCounter(counter - 1)
              }
        } else if(type === "NEXT"){
           if( numOfBtn === counter){
            setCounter(counter)
           } else {
            setCounter(counter + 1)
           }
        }

    }
    return (
        <>
        <div className="w-full flex flex-col md:flex-row justify-between items-center px-20  gap-3 md:gap-0 ">
          <div className="bg-[#ffbd00]/75   rounded-sm"><p className=" flex items-center gap-2 text-white text-[12px] md:text-xl font-medium md:font-semibold tracking-wider font-poppins p-2">We Have 10,000+ Brand New Product <span><img className="w-8 h-8 animate-bounce" src="/gift.svg" alt="gift.svg" /></span> </p></div>
      <div className="flex justify-center items-center gap-5 bg-[#f95738] p-1 md:p-2 rounded-md ">
        <div><button className="text-white text-[12px] md:text-xl font-medium md:font-semibold tracking-wider font-poppins p-2 " >EXPLORE NOW</button></div>
      <button  onClick={() => onButtonClick("PREVIEWS")}>
        <img className="w-10 h-10 p-2 rounded-md bg-amber-100 " src="/prev.svg" alt="prev.svg" />
        </button>
        <button onClick={() => onButtonClick("NEXT")}>
        <img className="w-10 h-10 p-2 rounded-md bg-amber-100 animate-pulse" src="/next.svg" alt="next.svg" />
        </button>
      </div>
    </div>

        </>
    )
}