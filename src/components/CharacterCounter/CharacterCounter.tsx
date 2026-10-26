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
    return (
        <div>
            <TextInput onTextChange={setText} />

            <p>You typed: {text}</p>

            <StatsDisplay
                stats={{
                    characterCount: text.length,
                    wordCount: wordCount,
                    readingTime: readingTime,
                }}
            /> 


            <p>Minimum Words = {props.minWords}</p>
            <p>Maximum Words = {props.maxWords}</p>
            <p>Target Reading Time = {props.targetReadingTime}</p>
        </div>
    );
}