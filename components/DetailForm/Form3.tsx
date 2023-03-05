import React, { useState } from "react";
import Stepper from "./Stepper";
import BackAndNext from "./BackAndNext";

import PreferenceImage from "../../public/Preferences.gif";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
type Props = {};
const Form3 = (props: Props) => {
    const { context, step, handleChangeForm3, form3Data, setForm3Data } =
        useContext(AppContext);
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-4 mx-auto flex flex-wrap items-center">
                <div className="md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <img
                        src={PreferenceImage.src}
                        alt="form"
                        className="aspect-square rounded-md m-8"
                    />
                </div>
                <div className="md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <>
                        <Stepper />
                    </>
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                        What you lookin' for?
                    </h2>

                    <div className="relative mb-4">
                        <label
                            htmlFor="full-name"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Gender
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={handleChangeForm3}
                        >
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Non-Binary</option>
                        </select>
                    </div>

                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label
                                htmlFor="age"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Age
                            </label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleChangeForm3}
                            />
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label
                                htmlFor="age"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Height
                            </label>
                            <input
                                type="number"
                                id="height"
                                name="height"
                                className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleChangeForm3}
                            />
                        </div>
                    </div>

                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label
                                htmlFor="email"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Habit Smoke
                            </label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                                </div>
                                <input
                                    type="checkbox"
                                    className="bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out"
                                    value="yes"
                                    name="habit-smoke"
                                    onChange={(e) => {
                                        setForm3Data(...form3Data, {
                                            "habit-drink": e.target.checked,
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label
                                htmlFor="email"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Habit Drink
                            </label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                                </div>
                                <input
                                    type="checkbox"
                                    className=" bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out"
                                    value="yes"
                                    name="habit-drink"
                                    onChange={(e) => {
                                        setForm3Data(...form3Data, {
                                            "habit-drink": e.target.checked,
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <BackAndNext />
                </div>
            </div>
        </section>
    );
};

export default Form3;
