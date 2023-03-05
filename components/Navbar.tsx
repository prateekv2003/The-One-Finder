"use client";
import React, { useState } from "react";
import Image from "next/image";

import Logo from "../public/twitter.png";

import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  session: Session | null;
};

const Navbar = ({ session }: Props) => {
  const router = useRouter();
  return (
    <div>
      <header className="fixed w-full z-30">
        <nav className="py-2.5 bg-white shadow-md">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <Link href="/" className="flex space-x-4 justify-start items-center">
              <Image src={Logo} className="h-6 w-6 sm:h-9 sm:w-9" alt="Logo" />
              <span className="text-xl font-semibold whitespace-nowrap text-white">
                New App
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <a
                href="/login"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              >
                Login
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
