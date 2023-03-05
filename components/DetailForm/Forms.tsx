import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import {storage} from "../../firebase"

type Props = {};
const Forms = (props: Props) => {
    const { context, step, setStep, handleSubmitForm } = useContext(AppContext);

    const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

    return (
        <div>
            <section className="text-gray-600 h-screen w-screen">
                <div className="px-5 py-8 mx-auto flex flex-wrap flex-col">
                    <div>
                        {step === 1 ? (
                            <Form1 />
                        ) : step === 2 ? (
                            <Form2 handleInputState={handleInputState}/>
                        ) : (
                            <Form3 />
                        )}
                    </div>
                    {step === 4 && (
                        <button
                            className="text-white bg-fuchsia-500 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-600 rounded text-lg cursor-pointer"
                            onClick={(e: any) => {
                                handleSubmitForm(e);
                            }}
                        >
                            Submit
                        </button>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Forms;
