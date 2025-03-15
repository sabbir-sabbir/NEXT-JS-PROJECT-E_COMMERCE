"use client"

import React, {useContext} from "react";
import { AllContext } from "@/app/context/ContextAPI";
import Link from "next/link";

export default function Navbar(){
    const {getData, cart} = useContext(AllContext);
    return (
        <>
        <nav className=" sticky top-0 z-50 w-full  py-2 px-6 md:px-14 bg-white/10 backdrop-blur-md border border-white/20  p-6 shadow-lg flex justify-between items-center">
            <div><img className="w-10 h-10" src="/logo.svg" alt="NAV LOGO" /></div>
            <div className="flex justify-center items-center gap-6">
                <div><input onChange={getData} className="w-[160px] md:w-[500px] bg-white/10 backdrop-blur-lg shadow-2xl text-zinc-700 outline-0 py-1 px-2 border-2 border-amber-300" type="text" placeholder="Search Your Item..." /></div>
                <div className="flex justify-center items-center gap-6">
                    <Link href="/components/about" ><span className="text-black font-medium hover:scale-105 duration-100 transition-all hover:text-zinc-600">About</span></Link>
                    <Link href="/components/contact" ><span className="text-black font-medium hover:scale-105 duration-100 transition-all hover:text-zinc-600">Contact</span></Link>
                    <Link href="/components/cards" ><img className="w-8 h-8 text-white" src="/card.svg" alt="CARD" />
                    <span className=" absolute top-2 flex justify-center items-center right-20 w-5 h-5 font-light rounded-full bg-red-500 text-white p-1">{cart.length}</span>
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}