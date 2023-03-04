import React, { useState, useEffect } from "react";
import Script from "next/script";

const CardAnimation = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "./cardScript.js";
        // script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <>
                <div className="card-swiper">
                    <div className="card-groups">
                        <div
                            className="card-group"
                            data-index={0}
                            data-status="active"
                        >
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                        </div>
                        <div
                            className="card-group"
                            data-index={1}
                            data-status="unknown"
                        >
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                        </div>
                        <div
                            className="card-group"
                            data-index={2}
                            data-status="unknown"
                        >
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                            <div className="little-card card"></div>
                            <div className="big-card card"></div>
                        </div>
                    </div>
                    <div className="card-swiper-buttons">
                        <button id="hate-button" onClick="handleHateClick()">
                            <i className="fa-solid fa-x" />
                        </button>
                        <button id="love-button" onClick="handleLoveClick()">
                            <i className="fa-solid fa-heart" />
                        </button>
                    </div>
                </div>
                <a
                    id="source-link"
                    className="meta-link"
                    href="https://kippo.com/chill"
                    target="_blank"
                >
                    <i className="fa-solid fa-link" />
                    <span>Source</span>
                </a>
                <a
                    id="yt-link"
                    className="meta-link"
                    href="https://youtu.be/6TYkDy54q4E"
                    target="_blank"
                >
                    <i className="fa-brands fa-youtube" />
                    <span>Tutorial</span>
                </a>
            </>
            <Script defer={true} src="./cardScript.js"></Script>
        </div>
    );
};

export default CardAnimation;
