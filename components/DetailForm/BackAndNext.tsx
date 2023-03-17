import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
import { redirect } from "next/navigation";

type Props = {};
const BackAndNext = (props: Props) => {
  const { context, step, setStep, handleSubmitForm, handleSubmit } =
    useContext(AppContext);
  return (
    <div className="flex flex-row justify-around text-center">
      <button
        disabled={step === 1}
        className="text-white bg-fuchsia-500 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-600 disabled:bg-fuchsia-300 rounded text-lg cursor-pointer disabled:cursor-not-allowed"
        onClick={() => setStep(step - 1)}
      >
        Back
      </button>
      <button
        className="text-white bg-fuchsia-500 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-600 disabled:bg-fuchsia-300 rounded text-lg cursor-pointer disabled:cursor-not-allowed"
        // disabled={step === 3}
        onClick={(e) => {
          if (step === 3) {
            console.log("submit");

            redirect("/home");
          } else {
            handleSubmitForm(e);
            setStep(step + 1);
          }
        }}
      >
        {step === 3 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default BackAndNext;
