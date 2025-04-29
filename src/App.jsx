import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color.jsx";
import ColorForm from "./Components/ColorForm.jsx";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function addColor(newColor) {
    setColors([newColor, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onNewColor={addColor} />

      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
