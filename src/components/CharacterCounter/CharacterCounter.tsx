import {useState} from "react";

import type { CharacterCounterProps } from "../../types";
import TextInput from "../TextInput/TextInput";




export default function CharacterCounter(props:CharacterCounterProps){
    const [text,setText] =useState("");
    // const wordCount = text.trim().split(" ").length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const readingTime = wordCount / 200;
    return(
        <div>
            <TextInput onTextChange={setText} />
            <p>You typed: {text}</p>
             <p>Length: {text.length}</p>
              <p>Word Count: {wordCount}</p>
              <p>Reading Time: {readingTime} minutes</p>


            <p>Minimum Words = {props.minWords}</p>
            <p>Maximum Words = {props.maxWords}</p>
            <p>Target Reading Time = {props.targetReadingTime}</p> 
        </div>
    );
}