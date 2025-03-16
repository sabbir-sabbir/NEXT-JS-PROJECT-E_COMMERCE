"use client"
import { useState, useEffect } from "react"

export default function Pagination({showPerPage}){
    const [counter, setCounter] = useState(1);

    useEffect(()=> {

    }, [counter])
    return (
        <>
        <div className=" w-full flex justify-between items-center px-20 ">
            <div><button onClick={()=> setCounter(counter + 1)} className="">previews</button></div>
            <div><button onClick={()=> setCounter(counter - 1)} className="">next</button></div>
        </div>
        </>
    )
}