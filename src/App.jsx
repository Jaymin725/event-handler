import { useState } from "react";

const colors = ["#FF7F50", "#008080", "#FFDB58", "#8E4585", "#6A5ACD"];

export default function App() {
  const [isHidden, setIsHidden] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <h1>Event Handler</h1>
      <div>
        <button onClick={() => setIsHidden(false)}>Show</button>
        <button onClick={() => setIsHidden(true)}>Hide</button>
        <button onClick={() => setIsHidden(!isHidden)}>Toggle</button>
        <button
          onClick={() => setIndex((index) => (index === 4 ? 0 : ++index))}
        >
          Change Color
        </button>
      </div>
      {!isHidden && (
        <div
          style={{ width: 200, aspectRatio: 1, backgroundColor: colors[index] }}
        ></div>
      )}
    </>
  );
}
