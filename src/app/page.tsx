"use client";
import React, { useState, useEffect } from "react";

import Navbar from "../../components/Landing/Navbar";
import Hero from "../../components/Landing/Hero";
import CardAnimation from "components/Landing/CardAnimation";
import Features from "components/Landing/Features";
import Testimonials from "components/Landing/Testimonials";
import Footer from "components/Landing/Footer";

type Props = {};

const Page = (props: Props) => {
    return (
        <div className="">
            <Navbar />
            <Hero />
            {/* <CardAnimation /> */}
            <Features />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Page;
