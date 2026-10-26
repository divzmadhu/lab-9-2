import type { StatsDisplayProps } from "../../types";

export default function StatsDisplay(props: StatsDisplayProps) {
    return (
        <div>
            <p>Character Count={props.stats.characterCount};</p>
            <p>Word Count= {props.stats.wordCount}; </p>
            <p>Reading Time={props.stats.readingTime}; </p>

        </div>
    );
}