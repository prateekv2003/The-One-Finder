"use client";
import React, { useState } from "react";
import Image from "next/image";

import Logo from "../public/twitter.png";

import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Dancing_Script } from "@next/font/google";
// config font
const DancingScript = Dancing_Script({
    weight: "500",
    subsets: ["latin"],
});
import { name } from "../static";

type Props = {
    session: Session | null;
};

const Navbar = ({ session }: Props) => {
    const router = useRouter();
    return (
        <div>
            <header className="fixed w-full z-30">
                <nav className="py-2.5 bg-white shadow-md shadow-fuchsia-100">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <Link
                            href="/"
                            className="flex space-x-4 justify-start items-center"
                        >
                            <span
                                className={
                                    "font-satisfy text-2xl text-center items-center font-semibold whitespace-nowrap text-fuchsia-500"
                                }
                            >
                                {name}
                            </span>
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <a
                                href="/login"
                                className="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 focus:outline-none dark:focus:ring-fuchsia-800"
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
