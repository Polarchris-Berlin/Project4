import { useState } from "react";
import { initialColors } from "./lib/colors";
import { v4 as uuid } from "uuid";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  // Liste aller Farben
  const [colors, setColors] = useState(initialColors);
  // ID der Farbkarte, für die wir gerade eine Lösch-Bestätigung anzeigen
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  // Fügt eine neu erstellte Farbe ins Array ein
  function handleNewColor({ role, hex, contrastText }) {
    const newColor = { id: uuid(), role, hex, contrastText };
    setColors([newColor, ...colors]);
  }

  // Startet die Lösch-Bestätigung für eine Karte
  function requestDeleteColor(id) {
    setConfirmDeleteId(id);
  }

  // Löscht die Farbe aus dem State und räumt die Bestätigung weg
  function handleDeleteColor(id) {
    setColors(colors.filter((c) => c.id !== id));
    setConfirmDeleteId(null);
  }

  // Bricht die Löschung ab und entfernt die Bestätigung
  function cancelDelete() {
    setConfirmDeleteId(null);
  }

  return (
    <div className="App">
      <h1>Theme Creator</h1>

      <div className="form-wrapper">
        <ColorForm onSubmitColor={handleNewColor} />
      </div>

      <div className="color-list">
        {colors.map((c) => (
          <Color
            key={c.id}
            color={c}
            onRequestDelete={() => requestDeleteColor(c.id)}
            onConfirmDelete={() => handleDeleteColor(c.id)}
            onCancelDelete={cancelDelete}
            showConfirm={confirmDeleteId === c.id}
          />
        ))}

        {colors.length === 0 && (
          <p className="empty-message">
            Es sind keine Farben mehr vorhanden. Füge neue Farben hinzu, um dein
            Theme zu gestalten!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
