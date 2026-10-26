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


    // A userdefined function to decide which feedback to display
    function getFeedback() {
        if (text === "") {
            return {
                emoji: "😊",
                message: "Welcome! Ready to start writing? Type something below, and I'll help you track your progress!",
                type: "welcome"

            };

        }
        else if (wordCount < (props.minWords ?? 0)) {
            return {
                emoji: "✍️",
                message: "Keep going! You're getting started.",
                type: "progress"


            };


        }
        else if (wordCount === (props.minWords ?? 0)) {
            return {
                emoji: "😊",
                message: "Great job! You've reached your goal.",
                type: "success"


            };
        }


        // else if (wordCount >= (props.maxWords ?? 0) * 0.75) {
        //     return {
        //         emoji: "😮",
        //         message: "Almost there! Watch your word count.",
        //         type: "warning"


        //     };

        // }

        else if (wordCount >= (props.maxWords ?? 0)) {
            return {
                emoji: "🛑",
                message: "You've reached your word limit!",
                type: "limit"


            };

        }

        else if (wordCount >= (props.maxWords ?? 0) * 0.75) {
            return {
                emoji: "😮",
                message: "Almost there! Watch your word count.",
                type: "warning"
            };
        }



    }

    const feedback = getFeedback();
    console.log("Word count:", wordCount, "Feedback type:", feedback?.type);


    return (
        <>
            <div>
                <TextInput onTextChange={setText} />

                <p>You typed: {text}</p>

                <section className="stats-box">
                    <StatsDisplay
                        stats={{
                            characterCount: text.length,
                            wordCount: wordCount,
                            readingTime: readingTime,
                        }}
                        feedbackType={feedback.type}

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
            {/*Feedback Box */}
            <div className="feedback-box">

                <p>{feedback.emoji} {feedback.message}</p>
            </div>
        </>
    );
}