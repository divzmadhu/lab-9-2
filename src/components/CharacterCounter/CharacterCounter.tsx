import {useState} from "react";

import type { CharacterCounterProps } from "../../types";




export default function CharacterCounter(props:CharacterCounterProps){
    const [text,setText] =useState("");
    return(
        <div>
            <p>Minimum Words = {props.minWords}</p>
            <p>Maximum Words = {props.maxWords}</p>
            <p>Target Reading Time = {props.targetReadingTime}</p> 
        </div>
    );
}