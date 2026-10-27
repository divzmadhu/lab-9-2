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
                message: "Welcome! Ready to start writing? Type something above, and I'll help you track your progress!",
                type: "welcome"

            };

        }
        // else if (wordCount < (props.minWords ?? 0)) {
        //     return {
        //         emoji: "✍️",
        //         message: "Keep going! You're getting started.",
        //         type: "progress"


        //     };


        // }
        // else if (wordCount === (props.minWords ?? 0)) {
        //     return {
        //         emoji: "😊",
        //         message: "Great job! You've reached your goal.",
        //         type: "success"


        //     };
        // }

        // else if (wordCount >= (props.maxWords ?? 0)) {
        //     return {
        //         emoji: "🛑",
        //         message: "You've reached your word limit!",
        //         type: "limit"


        //     };

        // }

        // else if (wordCount >= (props.maxWords ?? 0)) {
        //     return {
        //         emoji: "🛑",
        //         message: "You've reached your word limit!",
        //         type: "limit"
        //     };
        // }
        // else if (wordCount === (props.minWords ?? 0)) {
        //     return {
        //         emoji: "😊",
        //         message: "Great job! You've reached your goal.",
        //         type: "success"
        //     };
        // }
        // else if (wordCount >= Math.ceil((props.maxWords ?? 0) * 0.75)) {
        //     return {
        //         emoji: "😮",
        //         message: "Almost there! Watch your word count.",
        //         type: "warning"
        //     };
        // }
        // else if (wordCount < (props.minWords ?? 0)) {
        //     return {
        //         emoji: "✍️",
        //         message: "Keep going! You're getting started.",
        //         type: "progress"
        //     };
        // }

        // // Round up 75% of the maximum word count to a whole number.
        // else if (wordCount >= Math.ceil((props.maxWords ?? 0) * 0.75)) {
        //     return {
        //         emoji: "😮",
        //         message: "Almost there! Watch your word count.",
        //         type: "warning"
        //     };
        // }

        else if (wordCount > (props.maxWords ?? 0)) {
            return {
                emoji: "🛑",
                message: "You've exceeded your word limit!",
                type: "limit"
            };
        }
        else if (wordCount === (props.minWords ?? 0)) {
            return {
                emoji: "😊",
                message: "Great job! You've reached your goal.",
                type: "success"
            };
        }
        else if (wordCount >= Math.ceil((props.maxWords ?? 0) * 0.75)) {
            return {
                emoji: "😮",
                message: "Almost there! Watch your word count.",
                type: "warning"
            };
        }
        else if (wordCount >= Math.ceil((props.maxWords ?? 0) * 0.5)) {
            return {
                emoji: "🙂",
                message: "You're making progress! Keep going.",
                type: "caution"
            };
        }
        else {
            return {
                emoji: "✍️",
                message: "Keep going! You're getting started.",
                type: "progress"
            };
        }

    }


    const feedback = getFeedback();

    return (
        <>
            <div className="character-counter">
                {/* <h2>Character Counter</h2> */}


                <div className="text-input-box">
                    <h2>Text Input Display</h2>
                    <TextInput onTextChange={setText} />
                </div>

                {/* <p>You typed: {text}</p> */}

                <section className="stats-box">
                    <h2>Stats Display</h2>
                    <StatsDisplay
                        stats={{
                            characterCount: text.length,
                            wordCount: wordCount,
                            readingTime: readingTime,
                        }}
                        feedbackType={feedback.type}
                        minWords={props.minWords}
                        maxWords={props.maxWords}

                    />

                </section>


                {/* <section>
                <p>Minimum words: {props.minWords}</p>
                <p>Maximum words: {props.maxWords}</p>
            </section> */}
                {/* 
            <p>Minimum word requirement met: {hasMinimumWords ? "Yes" : "No"}</p>

            <p>Reached Maximum word limit:  {hasMaximumWords ? "Yes" : "No"}</p> */}



                {/*Feedback Box */}
                < div className="feedback-box" >
                    <h2>Feedback Display</h2>

                    <p>{feedback.emoji} {feedback.message}</p>

                    {/* Color legend explaining the meaning of each word-count status color */}
                    <div className="color-legend"> 
                        <p><span className="legend-color progress"></span> Red — Getting started</p> 
                        <p><span className="legend-color success"></span> Green — Minimum word goal reached</p> 
                        <p><span className="legend-color caution"></span> Yellow — Making progress (50%)</p> 
                        <p><span className="legend-color warning"></span> Orange — Almost there (75%)</p> 
                        <p><span className="legend-color limit"></span> Red — Word limit exceeded</p> 
                    </div>
                </div >

            </div>

        </>
    );
}