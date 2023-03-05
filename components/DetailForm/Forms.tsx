import React, { useState } from "react";
import Select from "react-select";

import { BiUserCircle } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

import FormImage from "../../public/Forms.gif";
import ProfileImage from "../../public/Profile.gif";
import PreferenceImage from "../../public/Preferences.gif";

const Forms = () => {
    const options = [
        { label: "Writing", value: "Writing" },
        { label: "Photography", value: "Photography" },
        { label: "Singing", value: "Singing" },
        { label: "Badminton", value: "Badminton" },
        { label: "Cricket", value: "Cricket" },
        { label: "Dancing", value: "Dancing" },
        { label: "Mountains", value: "Mountains" },
        { label: "Open", value: "Open-Minded" },
        { label: "Gym", value: "Gym" },
        { label: "Art & Craft", value: "Art & Craft" },
        { label: "Biryani", value: "Biryani" },
        { label: "Romance", value: "Romance" },
        { label: "Cooking", value: "Cooking" },
        { label: "Romantic", value: "Romantic" },
        { label: "Tea", value: "Tea" },
        { label: "Foodie", value: "Foodie" },
        { label: "Cycling", value: "Cycling" },
        { label: "Coffee", value: "Coffee" },
        { label: "Football", value: "Football" },
        { label: "Reels", value: "Reels" },
        { label: "Design", value: "Design" },
        { label: "Running", value: "Running" },
        { label: "Swimming", value: "Swimming" },
        { label: "Festivals", value: "Festivals" },
        { label: "Poetry", value: "Poetry" },
        { label: "Dogs", value: "Dogs" },
        { label: "Cafe", value: "Cafe" },
        { label: "Camping", value: "Camping" },
        { label: "Beer", value: "Beer" },
        { label: "Comedy", value: "Comedy" },
        { label: "Basketball", value: "Basketball" },
        { label: "Yoga", value: "Yoga" },
        { label: "Vegetarian", value: "Vegetarian" },
        { label: "Bollywood", value: "Bollywood" },
        { label: "Stand Up", value: "Stand Up" },
        { label: "Anime", value: "Anime" },
        { label: "Thriller", value: "Thriller" },
        { label: "Ambitions", value: "Ambitions" },
        { label: "Theatre", value: "Theatre" },
        { label: "Concerts", value: "Concerts" },
    ];

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({});
    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [name, setName] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
    };

    const [selectedFile, setSelectedFile] = useState([
        "fkjshafk",
        "kfdskfjasl",
        "fkdsal",
    ]);

    const handleFileInputChange = (event: any) => {
        const files = event.target.files;
        if (files.length <= 0) return;
        // for (let i = 0; i < files.length; i++) {
        //     const file = files[i];
        //     const reader = new FileReader();
        //     reader.onload = (e: any) => {
        //         const file = e.target.result;
        //         const fileName = e.target.fileName;
        //         setSelectedFile([...selectedFile, file]);
        //     };
        //     reader.readAsDataURL(file);
        // }
        // setSelectedFile(...selectedFile, file);
    };

    const handleSubmitFile = () => {
        // TODO: Handle file upload and processing using the selected file
        console.log(selectedFile);
    };

    const handleSubmitForm = (e: any) => {
        return;
    };

    const [selectedOptions, setSelectedOptions] = useState(null);

    const setHandle = (e: any) => {
        setSelectedOptions(e.map((option: any) => option.label));
    };
    const Stepper = () => {
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

    const Form1 = () => {
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
                                    onChange={(e) => setName(e.target.value)}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="relative mb-4">
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="mobile"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="relative mb-4">
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Interest
                                </label>
                                <Select
                                    options={options}
                                    onChange={setHandle}
                                    isMulti
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
                                        type="age"
                                        id="age"
                                        name="number"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onChange={handleChange}
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
                                        onChange={handleChange}
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
                                            value="habit-smoke"
                                            name="habit-smoke"
                                            onChange={handleChange}
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
                                            value="habit-smoke"
                                            name="habit-smoke"
                                            onChange={handleChange}
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
    const Form2 = () => {
        return (
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-4 mx-auto flex flex-wrap items-center">
                    <div className="md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <img
                            src={ProfileImage.src}
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
                                type="file"
                                id="images"
                                name="images"
                                className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleChange}
                            />
                            <button
                                onClick={handleSubmitFile}
                                className="text-white bg-fuchsia-500 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-600 rounded text-lg"
                            >
                                Upload
                            </button>
                        </div>
                        {selectedFile && selectedFile.length > 0 ? (
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {selectedFile.map((file, id) => {
                                    return (
                                        <div
                                            key={id}
                                            className="aspect-[11/16] border-dashed border-2 border-fuchsia-500 p-2 h-60 rounded-lg"
                                        >
                                            <img
                                                src={file}
                                                alt=""
                                                className="h-full w-full rounded-lg object-cover"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        ) : null}
                        <BackAndNext />
                    </div>
                </div>
            </section>
        );
    };

    const Form3 = () => {
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
                                type="file"
                                id="images"
                                name="images"
                                className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleChange}
                            />
                            <button
                                onClick={handleSubmitFile}
                                className="text-white bg-fuchsia-500 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-600 rounded text-lg"
                            >
                                Upload
                            </button>
                        </div>
                        <BackAndNext />
                    </div>
                </div>
            </section>
        );
    };

    const BackAndNext = () => {
        return (
            <div className="flex flex-row justify-around text-center">
                <button
                    disabled={step === 1}
                    className="text-white bg-fuchsia-500 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-600 disabled:bg-fuchsia-300 rounded text-lg cursor-pointer disabled:cursor-not-allowed"
                    onClick={() => {
                        setStep(step - 1);
                    }}
                >
                    Back
                </button>
                <button
                    className="text-white bg-fuchsia-500 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-600 disabled:bg-fuchsia-300 rounded text-lg cursor-pointer disabled:cursor-not-allowed"
                    disabled={step === 3}
                    onClick={(e) => {
                        handleSubmit(e);
                        setStep(step + 1);
                    }}
                >
                    Next
                </button>
            </div>
        );
    };

    return (
        <div>
            <section className="text-gray-600 h-screen w-screen">
                <div className="px-5 py-8 mx-auto flex flex-wrap flex-col">
                    <div>
                        {step === 1 ? (
                            <Form1 />
                        ) : step === 2 ? (
                            <Form2 />
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
