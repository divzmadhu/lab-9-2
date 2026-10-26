import TextInput from "./components/TextInput/TextInput";

import CharacterCounter from "./components/CharacterCounter/CharacterCounter";
import StatsDisplay from "./components/StatsDisplay/StatsDisplay";


export default function App() {
  return (
    <div>
      <h1>Lab 2 State & Events </h1>
      <h2>Character Counter</h2>
      <CharacterCounter
        minWords={10}
        maxWords={100}
        targetReadingTime={5}
      />
      <h2>Text Statistics</h2>
      <StatsDisplay
        stats={{
          characterCount: 100,
          wordCount: 20,
          readingTime: 2,
        }}
      />
      <textarea />

    </div>
  );
}
