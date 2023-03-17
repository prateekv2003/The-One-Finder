"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { CgUndo } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import AvatarDropdown from "./AvatarDropdown";
import FilterForm from "./FilterForm";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
// const db: { name: String; url: String }[] = [
//   {
//     name: "Richard Hendricks",
//     url: "./richard.jpg",
//   },
//   {
//     name: "Erlich Bachman",
//     url: "./erlich.jpg",
//   },
//   {
//     name: "Monica Hall",
//     url: "./monica.jpg",
//   },
//   {
//     name: "Jared Dunn",
//     url: "./jared.jpg",
//   },
//   {
//     name: "Dinesh Chugtai",
//     url: "./dinesh.jpg",
//   },
// ];

type Props = {
    userId: String;
};

function Advanced() {
    let userId = localStorage.getItem("userId");
    if (!userId) userId = "64043875030b114f0cea8db9";
    const [lastDirection, setLastDirection] = useState();
    const [recs, setRecs] = useState([]);
    const [superLike, setSuperLike] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(recs.length - 1);
    const { whoFor, whatFor, isDrinker, isSmooker } = useContext(AppContext);
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex);

    const childRefs = useMemo(
        () =>
            Array(recs.length)
                .fill(0)
                .map((i) => React.createRef()),
        [recs.length]
    );

    const updateCurrentIndex = (val: number) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    const canGoBack = currentIndex < recs.length - 1;

    const canSwipe = currentIndex >= 0;

    // set last direction and decrease current index
    const swiped = (direction: any, nameToDelete: String, index: number) => {
        setLastDirection(direction);
        fetch(`${process.env.BASE_URL}/v1/profile/swipe`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId1: userId,
                userId2: recs[index].id,
                liked: direction === "right",
            }),
        });
        updateCurrentIndex(index - 1);
    };

    const outOfFrame = (name: String, idx: number) => {
        console.log(
            `${name} (${idx}) left the screen!`,
            currentIndexRef.current
        );
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    };

    const swipe = async (dir: any) => {
        if (canSwipe && currentIndex < recs.length) {
            await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
        }
    };

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return;
        const newIndex = currentIndex + 1;
        updateCurrentIndex(newIndex);
        await childRefs[newIndex].current.restoreCard();
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function fetchRecs() {
        fetch(
            `https://The-One-Finder-Backend.architrathod1.repl.co/v1/profile/rec?userId=${userId}&who_to_date=${whoFor}&what_to_find=${whatFor}&is_habit_drink=${isDrinker}&is_habit_smoke=${isSmooker}`
        )
            .then((res) => res.json())
            .then((data) => {
                data.length = Math.min(data.length, 20);
                data.forEach((ele) => {
                    if (ele.userImage === "") {
                        if (ele.gender === "M") {
                            ele.userImage =
                                maleImages[ele.user_id % maleImages.length];
                        } else {
                            ele.userImage =
                                femaleImage[ele.user_id % femaleImage.length];
                        }
                    }
                });
                setRecs(data);
                console.log(data);
            });
    }
    useEffect(() => {
        fetchRecs();
    }, []);

    return (
        <div className="overflow-x-hidden h-screen mx-auto flex flex-col-reverse md:flex-row items-center w-screen relative">
            <div className="absolute top-4 right-4">
                {/* <AvatarDropdown /> */}
            </div>
            <div className="overflow-x-hidden overflow-y-scroll relative p-[1rem] h-full w-full flex flex-col justify-center space-y-4 items-center bg-gray-100">
                <FilterForm onApplyClick={() => fetchRecs()} />

                <div className="cardContainer">
                    {recs &&
                        Array.isArray(recs) &&
                        recs.map((character, index) => (
                            <TinderCard
                                ref={childRefs[index]}
                                className="swipe"
                                key={character.name}
                                onSwipe={(dir) =>
                                    swiped(dir, character.name, index)
                                }
                                onCardLeftScreen={() =>
                                    outOfFrame(character.name, index)
                                }
                                preventSwipe={["up", "down"]}
                            >
                                <div
                                    style={{
                                        backgroundImage: `url(${character.userImage})`,
                                    }}
                                    className="card"
                                >
                                    <Link
                                        href={`/profile/${character.id}`}
                                        className="card_name"
                                    >
                                        {character.name}
                                    </Link>
                                </div>
                            </TinderCard>
                        ))}
                </div>
                <div className="fixed bottom-5 left-0 right-0 justify-center sm:static flex mt-6 space-x-4 z-10">
                    <button
                        style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                        className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                        onClick={() => swipe("left")}
                    >
                        <RxCross2 className="w-5 h-5" />
                    </button>
                    <button
                        style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
                        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                        onClick={() => goBack()}
                    >
                        <CgUndo className="w-5 h-5" />
                    </button>
                    <button
                        style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                        className="text-pink-700 border border-pink-700 hover:bg-pink-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:focus:pink-blue-800"
                        onClick={() => swipe("right")}
                    >
                        <BsHeart className="w-5 h-5" />
                    </button>
                    <button
                        // style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                        className={`${
                            superLike
                                ? "bg-fuchsia-700 text-white  font-medium"
                                : "bg-white border text-fuchsia-700 border-fuchsia-700"
                        } rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-fuchsia-500 dark:text-fuchsia-500 dark:hover:text-white`}
                        onClick={() => setSuperLike(!superLike)}
                    >
                        <AiOutlineStar className="w-5 h-5" />
                    </button>
                </div>
                <Link
                    href="/chat"
                    title="Contact Sale"
                    className="fixed z-90 top-5 right-8 sm:bottom-10 sm:left-8 bg-blue-600 w-12 h-12 sm:w-20 sm:h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-lg hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
                >
                    &#9993;
                </Link>
            </div>
        </div>
    );
}

export default Advanced;
