"use client";
import React, { useState, useEffect } from "react";

import Navbar from "../../components/Landing/Navbar";
import Hero from "../../components/Landing/Hero";
import CardAnimation from "components/Landing/CardAnimation";
import Features from "components/Landing/Features";
import Testimonials from "components/Landing/Testimonials";
import Pricing from "components/Landing/Pricing";
import Footer from "components/Landing/Footer";

import Recs from "components/Recs";

type Props = {};

const Page = (props: Props) => {
    return (
        <div className="">
            <Navbar />
            <Hero />
            {/* <CardAnimation /> */}
            <Features />
            <Testimonials />
            <Pricing />
            <Footer />
            <Recs/>
        </div>
    );
};

export default Page;
