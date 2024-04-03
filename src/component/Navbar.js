"use client";
// import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  let User = true;

  return (
    <nav className="bg-[#403d6c]/20 shadow-md w-full">
      <div
        className="flex items-center w-[90%] mx-auto"
        style={{ justifyContent: "space-around" }}
      >
        <div>
          <Link href="/">
            <Image
              src="/logo2.png"
              height={100}
              width={250}
              loading="lazy"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center" style={{ gap: "15px" }}>
          <div>
            {/* <button className="px-5 py-1 font-semibold bg-red-300 text-black rounded-md text-lg">
                Log in
              </button> */}
            <Link
              href="/login"
              className="px-5 py-2 font-semibold bg-red-900 text-white rounded-md text-lg"
            >
              Log out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
