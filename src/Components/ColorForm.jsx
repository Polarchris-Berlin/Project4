import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ColorInput from "./ColorInput";
import "./ColorForm.css";

function ColorForm({ onNewColor }) {
  const [role, setRole] = useState("define role");
  const [hex, setHex] = useState("#000000");
  const [contrastText, setContrastText] = useState("#ffffff");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newColor = {
      id: uuid(),
      role,
      hex,
      contrastText,
    };

    onNewColor(newColor);
  };

  return (
    <form onSubmit={handleSubmit} className="color-form">
      {/* Platzhalter für Inputs */}
      <button type="submit">Add Color</button>
    </form>
  );
}

export default ColorForm;
