import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
} from "@chakra-ui/react";

import { name } from "../../static";

const testimonials = [
    {
        name: "Brandon P.",
        role: "Chief Marketing Officer",
        content:
            "I was hesitant to try online dating, but this platform has been a game-changer for me. I've connected with so many amazing people who share my interests and values. Thanks to this site, I've found my soulmate!",
        avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
        name: "Krysta B.",
        role: "Entrepreneur",
        content:
            "I've tried a lot of dating apps and sites, but none of them have matched the quality of matches I've found on this platform. The advanced matching algorithm really works, and I've met some incredible people I would have never crossed paths with otherwise.",
        avatar: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
        name: "Darcy L.",
        role: "Movie star",
        content:
            "I'm so grateful for the customization options on this dating site. I was able to create a profile that truly reflects who I am, and I've received so many messages from people who appreciate my honesty and authenticity.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
    },
    {
        name: "Daniel T.",
        role: "Musician",
        content:
            "The premium membership was totally worth it. I've been able to connect with so many amazing people, and the exclusive features have made it so much easier to find compatible matches.",
        avatar: "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
];

import React from "react";

const Testimonials = () => {
    return (
        <div id="testimonials">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
                            Hear from our perfect matches!
                        </h1>
                        <p className="text-xl leading-relaxed font-thin xl:w-2/4 lg:w-3/4 mx-auto text-gray-700">
                            We're not a fan of pickup lines. We are solely
                            interested in being honest.
                        </p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-fuchsia-700 inline-flex" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        {testimonials.map((testimonial) => {
                            return (
                                <div className="p-4 md:w-1/2 w-full">
                                    <div className="h-full bg-gray-100 p-8 rounded shadow-md shadow-fuchsia-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="block w-5 h-5 text-gray-400 mb-4"
                                            viewBox="0 0 975.036 975.036"
                                        >
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                                        </svg>
                                        <p className="leading-relaxed mb-6">
                                            {testimonial.content}
                                        </p>
                                        <a className="inline-flex items-center">
                                            <img
                                                alt="testimonial"
                                                src={testimonial.avatar}
                                                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                            />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-gray-900">
                                                    {testimonial.name}
                                                </span>
                                                <span className="text-gray-500 text-sm uppercase">
                                                    {testimonial.role}
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
