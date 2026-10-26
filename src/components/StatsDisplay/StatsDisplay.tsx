import type { StatsDisplayProps } from "../../types";

export default function StatsDisplay(props: StatsDisplayProps) {
    return (
        <div className="stats-row">

            <div className = "stat-item">
                <p>Character Count: {props.stats.characterCount}</p>

            </div>

            <div className="stat-item">
                <p>Word Count: {props.stats.wordCount}</p>
                <p>(Min: 5 | Max: 10)</p>
            </div>

            <div className="stat-item">
                <p>Reading Time: {props.stats.readingTime}</p>
            </div>

          

        </div>
    );
}