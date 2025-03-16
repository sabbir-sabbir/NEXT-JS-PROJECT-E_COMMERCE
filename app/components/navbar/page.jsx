"use client";

import React, { useContext, useState } from "react";
import { AllContext } from "@/app/context/ContextAPI";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const { getData, cart } = useContext(AllContext);

  const [menu, setMenu] = useState(true);
  return (
    <>
      <nav className="nav-container">
        <div className="flex items-center gap-2">
          <img className=" w-10 h-10" src="/logo.svg" alt="NAV LOGO" />
          <span>
            <h2 className="logo-text">
              HAPPY<span className="text-[#ffb703]">SHOP</span>
            </h2>
          </span>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className="flex-grow">
            <input
              onChange={getData}
              className="input-field"
              type="text"
              placeholder="Search Your Item..."
            />
          </div>

          {/* hidden in mobile screen */}
          <div className="big-screen-link">
            <Link href="/components/about">
              <span className="about">
                About
              </span>
            </Link>
            <Link href="/components/contact">
              <span className="contact">
                Contact
              </span>
            </Link>

            <Link href="/components/cards" className="relative">
              <img className="w-8 h-8 text-white" src="/card.svg" alt="CARD" />
              <span className="card-length">
                {cart.length}
              </span>
            </Link>
          </div>

          {/* visible in mobile screen  */}
          <div className="visible md:hidden">
            <button onClick={() => setMenu(!menu)}>
              {menu ? (
                <CiMenuFries style={{ width: "30px", height: "30px" }} />
              ) : (
                <IoMdClose
                  style={{ width: "30px", height: "30px", color: "red" }}
                />
              )}
            </button>
            {!menu && (
              <div className=" w-[100px] h-auto p-3  absolute top-10 right-0 ">
                <div className="mobile-screen-link">
                  <Link href="/components/about">
                    <span className="about">
                      About
                    </span>
                  </Link>

                  <Link href="/components/contact">
                    <span className="contact">
                      Contact
                    </span>
                  </Link>

                  <Link href="/components/cards" className="relative">
                    <img
                      className="w-8 h-8 text-white"
                      src="/card.svg"
                      alt="CARD"
                    />
                    <span className="card-length">
                      {cart.length}
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
