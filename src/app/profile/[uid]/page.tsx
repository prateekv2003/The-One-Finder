"use client";
import React from "react";
import Demo from "../../../../public/demo.png";
import Veer from "../../../../public/veer.jpg";
import { useEffect, useState } from "react";
import { MdDateRange, MdOutlineSmokingRooms } from "react-icons/md";
import { GiWineGlass } from "react-icons/gi";
import {
    BsGenderAmbiguous,
    BsGenderFemale,
    BsGenderMale,
} from "react-icons/bs";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@chakra-ui/react";
import Capture from "components/Capture";
import { Button } from "flowbite-react";
type Props = {};

const Profile = ({ params }: any) => {
    const [user, setUser] = useState({});
    const gender = {
        M: (
            <>
                <BsGenderMale className="text-2xl inline text-fuchsia-600" />{" "}
                <span className="text-sm text-gray-600">M</span>
            </>
        ),
        F: (
            <>
                <BsGenderFemale className="text-2xl inline text-fuchsia-600" />{" "}
                <span className="text-sm text-gray-600">F</span>
            </>
        ),
        NB: (
            <>
                <BsGenderAmbiguous className="text-2xl inline text-fuchsia-600" />{" "}
                <span className="text-sm text-gray-600">NB</span>
            </>
        ),
    };
    const maleImages = new Array(
        "https://images.unsplash.com/photo-1518809595274-1471d16319b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHx6SEpYT0VsTXRld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1597810743069-cf40e2452aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1571868200937-54dd464381cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1474293507615-951863a0f942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1621353269062-6aa0165576f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzZ8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1549045337-967927d923c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTd8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjF8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
    );

    const femaleImage = new Array(
        "https://images.unsplash.com/photo-1622496030981-e8377ce1ecdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXx6SEpYT0VsTXRld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1622495966027-e0173192c728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnx6SEpYT0VsTXRld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1622495966087-4b72dd849db7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3x6SEpYT0VsTXRld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1578078911787-368f3ec8545f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3x6SEpYT0VsTXRld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1546961342-ea5f71b193f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1483381616603-8dde934da56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjN8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
        "https://images.unsplash.com/photo-1533638842865-579068d17afe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjV8ekhKWE9FbE10ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
    );
    function fetchUser(id: string) {
        fetch(
            `https://The-One-Finder-Backend.architrathod1.repl.co/v1/users/${id}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.userImage) {
                    if (data.gender === "M") {
                        data.userImage =
                            maleImages[data.user_id % maleImages.length];
                    } else {
                        data.userImage =
                            femaleImage[data.user_id % femaleImage.length];
                    }
                }
                setUser(data);
                console.log("hi", data);
            });
    }
    useEffect(() => {
        if (params.uid) {
            fetchUser(params.uid);
        }
    }, [params.uid]);

    const cmToInFt = (cm: any, inches = Math.round(cm / 2.54)) => ({
        feet: Math.floor(inches / 12),
        inches: inches % 12,
    });

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSave = () => {
        // return null;
    };

    return (
        <div className="w-screen">
            <div className="w-[90%] mx-auto mb-8 mt-6">
                <div className="max-w-4xl flex items-center h-auto lg:h-[100vh-20%] flex-wrap mx-auto my-32 lg:my-0">
                    <div
                        id="profile"
                        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
                    >
                        <div className="p-4 md:p-12 text-center lg:text-left">
                            {/* Image for mobile view*/}
                            <div
                                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${
                                        user && user.userImage
                                    })`,
                                }}
                            ></div>
                            <h1 className="text-3xl font-bold pt-8 lg:pt-0 whitespace-nowrap">
                                {user && user?.name}{" "}
                                {user && user?.gender && gender[user?.gender]}
                            </h1>
                            <p className="text-xs pt-8 lg:pt-0">
                                {user && user?.email}
                            </p>
                            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-fuchsia-500 opacity-25" />

                            <p className="text-base font-bold flex items-center justify-center lg:justify-start">
                                <svg
                                    className="h-4 fill-current text-fuchsia-700 pr-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                </svg>{" "}
                                What you do
                            </p>
                            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                <svg
                                    className="h-4 fill-current text-fuchsia-700 pr-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                </svg>{" "}
                                Your Location - 25.0000° N, 71.0000° W
                            </p>
                            <div className="flex space-x-4 pt-2">
                                <p>
                                    <span className="text-sm font-bold">
                                        Age :{" "}
                                    </span>
                                    {user && user?.age}
                                </p>
                                <p>
                                    <span className="text-sm font-bold">
                                        Score :{" "}
                                    </span>
                                    {user && user?.profile_score?.toFixed(2)}
                                </p>
                                <p>
                                    <span className="text-sm font-bold">
                                        Height :{" "}
                                    </span>
                                    {user &&
                                        user?.height &&
                                        cmToInFt(user?.height)?.feet +
                                            "′" +
                                            cmToInFt(user?.height)?.inches +
                                            "″"}
                                </p>
                            </div>
                            <p className="pt-8 text-sm">
                                {user &&
                                    user?.bio &&
                                    user?.bio !== "NAN" &&
                                    `❝${user && user?.bio}❞`}
                            </p>
                            <div className="pt-8 pb-2">
                                <button className="bg-fuchsia-700 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded-full">
                                    Message
                                </button>
                                <button
                                    className="bg-fuchsia-700 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded-full"
                                    onClick={isOpen}
                                >
                                    Verify
                                </button>
                                {/* <Modal isOpen={onOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Modal Title</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <>
                                                <Capture />
                                            </>
                                        </ModalBody>

                                        <ModalFooter>
                                            <button
                                                className="bg-white border py-3 px-3 md:px-0 md:w-1/2 rounded-xl mt-5 flex justify-center items-center text-sm  duration-300 text-fuchsia-700"
                                                onClick={onClose}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="bg-white border py-3 px-3 md:px-0 md:w-1/2 rounded-xl mt-5 flex justify-center items-center text-sm  duration-300 text-fuchsia-700"
                                                onClick={handleSave}
                                            >
                                                Save
                                            </button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal> */}
                            </div>

                            <div className="mt-4 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center gap-2">
                                {user &&
                                    ((user?.is_habit_smoke &&
                                        user?.is_habit_smoke != "N") ||
                                        (user?.is_habit_drink &&
                                            user?.is_habit_drink != "N")) && (
                                        <h1 className="text-base font-bold">
                                            Habits :{" "}
                                        </h1>
                                    )}
                                {user &&
                                    user?.is_habit_smoke &&
                                    user?.is_habit_smoke != "N" && (
                                        <MdOutlineSmokingRooms className="inline-flex items-center justify-center w-8 h-8 p-1 mr-2 text-fuchsia-700 border border-fuchsia-700 transition-colors duration-150 bg-fuchsia-200 rounded-full focus:shadow-outline hover:bg-fuchsia-700 hover:text-fuchsia-200" />
                                    )}
                                {user &&
                                    user?.is_habit_drink &&
                                    user?.is_habit_drink != "N" && (
                                        <GiWineGlass className="inline-flex items-center justify-center w-8 h-8 p-1 mr-2 text-fuchsia-700 border border-fuchsia-700 transition-colors duration-150 bg-fuchsia-200 rounded-full focus:shadow-outline hover:bg-fuchsia-700 hover:text-fuchsia-200" />
                                    )}
                            </div>
                            <div className="mt-4 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center gap-2">
                                {user && user?.interests?.length > 0 && (
                                    <h1 className="text-base font-bold">
                                        Interests :{" "}
                                    </h1>
                                )}
                                {user &&
                                    user?.interests &&
                                    user?.interests?.map((obj) => {
                                        return (
                                            <div
                                                key={obj}
                                                className="flex justify-center items-center font-medium py-1.5 px-2.5 bg-white rounded-full text-fuchsia-700 bg-fuchsia-200 border border-fuchsia-700 hover:text-white hover:bg-fuchsia-700"
                                            >
                                                <div className="text-base font-normal leading-none max-w-full flex-initial">
                                                    {obj}
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                            {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5">
                        {/* Big profile image for side bar (desktop) */}
                        <img
                            src={
                                (user && user.userImage) ||
                                "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                            }
                            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                        />
                        {/* Image from: http://unsplash.com/photos/MP0IUfwrn0A */}
                    </div>
                </div>

                {user?.images &&
                    Array.isArray(user?.images) &&
                    user?.images.map((obj, id) => {
                        return (
                            <div
                                key={id}
                                className="grid m-6 md:grid-cols-3 gap-4"
                            >
                                <div className="">
                                    <img src={Demo.src} alt="" />
                                </div>
                                <div className="">
                                    <img src={Demo.src} alt="" />
                                </div>
                                <div className="">
                                    <img src={Demo.src} alt="" />
                                </div>
                                <div className="">
                                    <img src={Demo.src} alt="" />
                                </div>
                                <div className="">
                                    <img src={Demo.src} alt="" />
                                </div>
                                <div className="">
                                    <img src={Demo.src} alt="" />
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Profile;
