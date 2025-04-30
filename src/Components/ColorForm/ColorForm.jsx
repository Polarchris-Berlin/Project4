import React, { useState, useEffect } from "react";
import "./ColorForm.css";

export default function ColorForm({
  onSubmitColor,
  initialRole = "",
  initialHex = "#000000",
  initialContrastText = "#ffffff",
}) {
  const [role, setRole] = useState(initialRole);
  const [hex, setHex] = useState(initialHex);
  const [contrastText, setContrastText] = useState(initialContrastText);

  useEffect(() => setRole(initialRole), [initialRole]);
  useEffect(() => setHex(initialHex), [initialHex]);
  useEffect(() => setContrastText(initialContrastText), [initialContrastText]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitColor({ role, hex, contrastText });

    if (!initialRole) {
      setRole("");
      setHex("#000000");
      setContrastText("#ffffff");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="color-form">
      <div className="form-group">
        <label htmlFor="role-input">Role</label>
        <input
          id="role-input"
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Name der Farbe"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="hex-text-input">Hex</label>
        <input
          id="hex-text-input"
          type="text"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          placeholder="#RRGGBB"
          pattern="^#([0-9A-Fa-f]{3}){1,2}$"
          required
        />
        <input
          id="hex-color-input"
          type="color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contrast-text-input">Contrast Text</label>
        <input
          id="contrast-text-input"
          type="text"
          value={contrastText}
          onChange={(e) => setContrastText(e.target.value)}
          placeholder="#RRGGBB"
          pattern="^#([0-9A-Fa-f]{3}){1,2}$"
          required
        />
        <input
          id="contrast-color-input"
          type="color"
          value={contrastText}
          onChange={(e) => setContrastText(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-btn">
        {initialRole ? "Update Color" : "Add Color"}
      </button>
    </form>
  );
}
