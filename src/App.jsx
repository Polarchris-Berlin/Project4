// React-Hook import für lokalen State
import { useState } from "react";
// Unsere vordefinierten Farben aus der Lib
import { initialColors } from "./lib/colors";
// UUID-Generator für eindeutige IDs neuer Farben
import { v4 as uuid } from "uuid";
// Component zum Darstellen einzelner Farb-Karten
import Color from "./Components/Color/Color";
// Formular-Komponente, um neue Farben hinzuzufügen
import ColorForm from "./Components/ColorForm/ColorForm";
// Optionale globale Styles (falls du App-spezifische CSS hast)
import "./App.css";

function App() {
  // State-Hook: 'colors' hält die Liste aller Farb-Objekte
  // State-HooK confirmDeletedId enthält ID der Farbkarte, die gelöscht wird
  // initial befüllt mit 'initialColors' aus der Lib
  const [colors, setColors] = useState(initialColors);
  const [confirmDeletedId, setConfirmDeleteId] = useState(null);

  /**
   * handleNewColor
   * Wird aufgerufen, wenn ColorForm ein neues Farb-Objekt liefert.
   * Baut ein neues Objekt mit uuid() und den Formular-Werten,
   * und fügt es vorne in den 'colors'-State ein.
   */
  function handleNewColor({ role, hex, contrastText }) {
    const newColor = { id: uuid(), role, hex, contrastText };
    setColors([newColor, ...colors]);

    //speichert ID der zu löschenden Farbkarte
    function requestDeleteColor(id) {
      setConfirmDeleteId(id);
    }
    //Entfernt die Karte mit der ID aus requestedDeleteColorID
    //Setzt die setCondirmDeleteId zurück auf null.
    function handleDeleteColor(id) {
      setColors(colors.filter((c) => c.id !== id));
      setConfirmDeleteId(null);
    }
    // Setzt die ConfirmDeletedID zurück auf null ohne zu löschen
    function cancelDelete() {
      setConfirmDeleteId(null);
    }
  }

  // Rendern der UI
  return (
    <>
      {/* Überschrift der App */}
      <h1>Theme Creator</h1>

      {/* Formular zum Hinzufügen einer neuen Farbe */}
      <ColorForm onSubmitColor={handleNewColor} />

      {/* Alle bestehenden Farben als Color-Komponenten mappen */}
      {colors.map((c) => (
        // Jeder Eintrag braucht einen eindeutigen key fürs Re-Rendering
        <Color key={c.id} color={c} />
      ))}
    </>
  );
}

// Default-Export der App-Komponente, damit main.jsx sie importieren kann
export default App;
