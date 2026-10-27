import type { StatsDisplayProps } from "../../types";

export default function StatsDisplay(props: StatsDisplayProps) {
    return (
        <div className="stats-row">

            <div className="stat-item">
                <p>Character Count: {props.stats.characterCount}</p>

            </div>

            <div className="stat-item">
                <p>
                    Word Count:{" "}
                    <span className={`word-count ${props.feedbackType ?? "welcome"}`}>
                        {props.stats.wordCount}
                    </span>
                </p>                  
                <p>(Min: {props.minWords} | Max: {props.maxWords})</p>
            </div>

            <div className="stat-item">
                <p>Reading Time: {props.stats.readingTime}</p>
            </div>



        </div>
    );
}