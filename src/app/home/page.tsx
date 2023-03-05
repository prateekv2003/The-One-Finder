"use client";
import React from "react";
import Recs from "../../../components/Recs";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
type Props = {};

const Home = (props: Props) => {
    const { context, data } = useContext(AppContext);
    console.log(data);
    // console.log("Hellooo", context.data);

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Recs />
        </div>
    );
};

export default Home;
