import "./ColorInput.css";
import React, { useState, useEffect } from "react";

export default function ColorInput({
  label,
  name,
  value: defaultValue,
  onChange,
}) {
  // Lokaler State für synchronisierte Inputs
  const [inputValue, setInputValue] = useState(defaultValue);

  // Wenn sich defaultValue von außen ändert, lokal nachziehen
  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  // Gemeinsamer Handler für Text- und Color-Input
  function handleInputValue(e) {
    const val = e.target.value;
    setInputValue(val); // intern synchronisieren
    onChange(val); // nach außen melden
  }

  return (
    <label className="color-input" htmlFor={name}>
      <span className="label-text">{label}</span>
      <div className="inputs">
        {/* Text-Input */}
        <input
          type="text"
          id={name}
          name={name}
          value={inputValue}
          onChange={handleInputValue}
        />
        {/* Color-Picker */}
        <input
          type="color"
          name={name}
          value={inputValue}
          onChange={handleInputValue}
        />
      </div>
    </label>
  );
}
