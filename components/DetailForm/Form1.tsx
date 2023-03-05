import React, { useState } from "react";
import Select from "react-select";
import FormImage from "../../public/Forms.gif";
import Stepper from "./Stepper";
import BackAndNext from "./BackAndNext";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
type Props = {};
import { options } from "../../static";

const Form1 = (props: Props) => {
    const { context, handleChangeForm1, form1Data, setForm1Data } =
        useContext(AppContext);

    const [selectedOptions, setSelectedOptions] = useState(null);
    const setHandle = (e: any) => {
        setSelectedOptions(e.map((option: any) => option.label));
        setForm1Data({
            ...form1Data,
            interest: e.map((option: any) => option.label),
        });
    };

    return (
        <div className="">
            <section className="text-gray-600">
                <div className="container px-5 py-4 mx-auto flex flex-wrap items-center">
                    <div className="w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <img
                            src={FormImage.src}
                            alt="form"
                            className="aspect-square rounded-md m-8"
                        />
                    </div>
                    <div className="md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <>
                            <Stepper />
                        </>
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                            About You!
                        </h2>
                        <div className="relative mb-4">
                            <label
                                htmlFor="full-name"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleChangeForm1}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="bio"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Bio
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                rows={3}
                                className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleChangeForm1}
                            />

                            {/* <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                /> */}
                        </div>

                        <div className="relative mb-4">
                            <label
                                htmlFor="full-name"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Date Of Birth
                            </label>
                            {/* <div className="flex gap-2">
                                    <select
                                        id="dob"
                                        name="dob"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        placeholder="DD"
                                    >
                                        {days.map((year, id) => {
                                            return (
                                                <option key={id}>{year}</option>
                                            );
                                        })}
                                    </select>
                                    <select
                                        id="dob"
                                        name="dob"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    >
                                        {months.map((year, id) => {
                                            return (
                                                <option key={id}>{year}</option>
                                            );
                                        })}
                                    </select>
                                    <select
                                        id="dob"
                                        name="dob"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    >
                                        {years.map((year, id) => {
                                            return (
                                                <option key={id}>{year}</option>
                                            );
                                        })}
                                    </select>
                                </div> */}
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleChangeForm1}
                            />
                        </div>

                        <div className="relative mb-4">
                            <label
                                htmlFor="phone"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="mobile"
                                className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleChangeForm1}
                            />
                        </div>

                        <div className="relative mb-4">
                            <label
                                htmlFor="interest"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Interest
                            </label>
                            <Select
                                options={options}
                                onChange={setHandle}
                                isMulti
                                name="Interest"
                                className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
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
                                    onChange={handleChangeForm1}
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
                                    onChange={handleChangeForm1}
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
                                            setForm1Data(...form1Data, {
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
                                            setForm1Data(...form1Data, {
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
        </div>
    );
};

export default Form1;
