
import "./App.css";
// import TextInput from "./components/TextInput/TextInput";

import CharacterCounter from "./components/CharacterCounter/CharacterCounter";
// import StatsDisplay from "./components/StatsDisplay/StatsDisplay";


export default function App() {
  return (
    <div>
      <h1>Lab 2 State & Events </h1>
      <h2>Character Counter Display</h2>
      <CharacterCounter
        minWords={25}
        maxWords={100}
        targetReadingTime={5}
      />

    </div>
  );
}
