import { useState } from "react";

import type { CharacterCounterProps } from "../../types";
import TextInput from "../TextInput/TextInput";

import StatsDisplay from "../StatsDisplay/StatsDisplay";





export default function CharacterCounter(props: CharacterCounterProps) {
    const [text, setText] = useState("");

    //Calculate the Word Count
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

    // Calculate the Reading Time
    const readingTime = wordCount / 200;

    // Checking if they have atleast minimum words as mentionted in the App.tsx
    let hasMinimumWords;

    if (wordCount >= (props.minWords ?? 0)) {
        hasMinimumWords = true;
    } else {
        hasMinimumWords = false;
    }

    // Checking if it has reached the Maximum words as mentioned in the App.tsx
    let hasMaximumWords;

    // if (wordCount <= ((props.maxWords)/2 ?? 0)) {
    if (wordCount <= (props.maxWords ?? 0)) {
        hasMaximumWords = false;
    }
    else {
        hasMaximumWords = true;
    }

    return (
        <div>
            <TextInput onTextChange={setText} />

            <p>You typed: {text}</p>

            <section className = "stats-box">
                <StatsDisplay
                    stats={{
                        characterCount: text.length,
                        wordCount: wordCount,
                        readingTime: readingTime,
                    }}
                />


            </section>

            <section>
                <p>Minimum words: {props.minWords}</p>
                <p>Maximum words: {props.maxWords}</p>
            </section>




            {/* <p>Minimum Words = {props.minWords}</p> */}
            <p>Minimum word requirement met: {hasMinimumWords ? "Yes" : "No"}</p>

            {/* <p>Maximum Words = {props.maxWords}</p> */}
            <p>Reached Maximum word limit:  {hasMaximumWords ? "Yes" : "No"}</p>
            {/* <p>Reached Maximum word limit: {hasMaximumWords ? `Have Exceeded the Word limit` : `Words ${hasMaximumWords} / {props.maxWords}` }</p> */}
            {/* <p>Target Reading Time = {props.targetReadingTime}</p> */}

            {/* <section classname="stats-box">
                <StatsDisplay
                    stats={{
                        characterCount: text.length,
                        wordCount: wordCount,{props.miniWords} | {props.maxWords}
                readingTime: readingTime,
                }}
            />



            </section> */}
        </div>
    );
}