"use client"
import Link from "next/link";
import About from "../about/page";

export default function Navbar(){
    return (
        <>
        <nav className="w-full  py-2 px-14 bg-gradient-to-r from-[#001d3d] via-[#0c65da] to-[#1d3557] flex justify-between items-center">
            <div><img className="w-10 h-10" src="/logo.svg" alt="NAV LOGO" /></div>
            <div className="flex justify-center items-center gap-6">
                <div><input className="w-[160px] md:w-[500px] text-white outline-0 py-1 px-2 border-2 border-amber-300" type="text" placeholder="Search Your Item..." /></div>
                <div className="flex justify-center items-center gap-6">
                    <Link href="/about" ><span className="text-lime-200 hover:scale-105 duration-100 transition-all hover:text-gray-300">About</span></Link>
                    <Link href="/contact" ><span className="text-lime-200 hover:scale-105 duration-100 transition-all hover:text-gray-300">Contact</span></Link>
                    <Link href="/card" ><img className="w-8 h-8 text-white" src="/card.svg" alt="CARD" /></Link>
                </div>
            </div>
        </nav>
        </>
    )
}