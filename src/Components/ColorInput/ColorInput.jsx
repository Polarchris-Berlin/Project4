// React-Hooks importieren: useState für lokalen State, useEffect für Prop-Änderungen nachziehen
import { useState, useEffect } from "react";
// Stylesheet für die ColorInput-Komponente
import "./ColorInput.css";

/**
 * ColorInput-Komponente
 * Props:
 * - id: eindeutiger Identifier für Text- und Color-Input (wird als name/htmlFor genutzt)
 * - defaultValue: Ausgangs-HEX-Wert, der in beiden Inputs angezeigt wird
 */
export default function ColorInput({ id, defaultValue }) {
  // Lokaler State, der aktuell eingegebenen Wert
  const [inputValue, setInputValue] = useState(defaultValue);

  /**
   * useEffect-Hook
   * Wenn sich der defaultValue-Prop ändert (z. B. beim Formular-Reset),
   * setzen wir den lokalen inputValue neu, damit beide Inputs synchron bleiben.
   */
  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  /**
   * handleInputValue
   * Wird aufgerufen, wenn im Text- oder Color-Input etwas verändert wird.
   * Aktualisiert den lokalen State (inputValue) automatisch.
   */
  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      {/* Text-Input für HEX-Code */}
      <input
        type="text"
        id={id} // Label-Fokus & FormData-Name
        name={id}
        value={inputValue} // Wert kommt aus lokalem State
        onChange={handleInputValue} // Synchronisiert State bei jeder Änderung
      />

      {/* Color-Picker für dieselbe Farbe */}
      <input
        type="color"
        id={`${id}-picker`} // Separater ID, um Label-Unterscheidung zu ermöglichen
        value={inputValue} // Derselbe Wert wie im Textfeld
        onChange={handleInputValue} // Nutzt denselben Handler, um beide Felder synchron zu halten
      />
    </>
  );
}
