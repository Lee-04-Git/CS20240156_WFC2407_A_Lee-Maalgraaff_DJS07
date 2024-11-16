import React from "react";
import memesData from "../memesData.js"

export default function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        console.log(url);
    }

    return (
        <main>
            <form className="form">
                <div>
                    <label htmlFor="top-text">Top Text</label>
                    <input
                        id="top-text"
                        type="text"
                        placeholder="Shut up"
                        className="form--input"
                    />
                </div>
                <div>
                    <label>Bottom Text
                    <input
                            type="text"
                            placeholder="and take my money"
                            className="form--input"
                        />
                    </label>
                </div>
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}