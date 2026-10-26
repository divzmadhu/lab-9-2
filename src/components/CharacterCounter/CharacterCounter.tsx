import type { CharacterCounterProps } from "../../types";

export default function CharacterCounter(props:CharacterCounterProps){
    return(
        <div>
            <p>Minimum Words = {props.minWords}</p>
            <p>Maximum Words = {props.maxWords}</p>
            <p>Target Reading Time = {props.targetReadingTime}</p> 
        </div>
    );
}