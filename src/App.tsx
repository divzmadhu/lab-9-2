// import TextInput from "./components/TextInput/TextInput";

import StatsDisplay from "./components/StatsDisplay/StatsDisplay";


export default function App() {
  return (
    <div>
      <h1>Lab 2 State & Events </h1>
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
