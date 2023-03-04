import React from "react";
const features = [
    {
        "Smart Matching Algorithm":
            "Our dating platform uses advanced matching technology to connect users with compatible partners based on their interests, preferences, and behavior.",
    },
    {
        "Enhanced Profile Customization":
            "Our platform offers advanced profile customization options, allowing users to create highly personalized profiles that showcase their unique personalities and interests.",
    },
    {
        "Premium Membership Benefits":
            "By upgrading to our premium membership plans, users can unlock exclusive benefits and features, including advanced search options, unlimited likes and matches, and access to a community of like - minded singles.",
    },
];

const Features = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
                            Exciting Features
                        </h1>
                        <p className="text-xl leading-relaxed font-thin xl:w-2/4 lg:w-3/4 mx-auto text-gray-700">
                            You call it madness, but we call it love.
                        </p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-fuchsia-700 inline-flex" />
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-700 mb-5 flex-shrink-0">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-10 h-10"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    Smart Matching Algorithm
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Our dating platform uses advanced matching
                                    technology to connect users with compatible
                                    partners based on their interests,
                                    preferences, and behavior.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-700 mb-5 flex-shrink-0">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-10 h-10"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx={6} cy={6} r={3} />
                                    <circle cx={6} cy={18} r={3} />
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    Enhanced Profile Customization
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Our platform offers advanced profile
                                    customization options, allowing users to
                                    create highly personalized profiles that
                                    showcase their unique personalities and
                                    interests.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-700 mb-5 flex-shrink-0">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-10 h-10"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    Premium Membership Benefits
                                </h2>
                                <p className="leading-relaxed text-base">
                                    By upgrading to our premium membership
                                    plans, users can unlock exclusive benefits
                                    and features, including advanced search
                                    options, unlimited likes and matches, and
                                    access to a community of like - minded
                                    singles.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="flex mx-auto mt-16 text-white bg-fuchsia-700 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-600 rounded text-lg">
                        Learn More
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Features;
