import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
type Props = {};
const Stepper = (props: Props) => {
    const { context, step, setStep, handleSubmit } = useContext(AppContext);
    return (
        <div className="flex mx-auto flex-wrap mb-20">
            <a
                className={
                    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t" +
                    ` ${
                        step === 1 &&
                        " border-fuchsia-500 text-fuchsia-500 bg-gray-100"
                    }`
                }
            >
                <BiUserCircle className="w-5 h-5 mr-3" />
                STEP 1
            </a>
            <a
                className={
                    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider" +
                    ` ${
                        step === 2 &&
                        " border-fuchsia-500 text-fuchsia-500 bg-gray-100"
                    }`
                }
            >
                <IoMdPhotos className="w-5 h-5 mr-3" />
                STEP 2
            </a>
            <a
                className={
                    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider" +
                    ` ${
                        step === 3 &&
                        " border-fuchsia-500 text-fuchsia-500 bg-gray-100"
                    }`
                }
            >
                <AiOutlineAppstoreAdd className="w-5 h-5 mr-3" />
                STEP 3
            </a>
        </div>
    );
};

export default Stepper;
