import useLocalStorageState from "use-local-storage-state";
import { initialColors } from "./lib/colors";
import { v4 as uuid } from "uuid";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  // Liste aller Farben aus LocalStorage
  const [colors, setColors] = useLocalStorageState("theme-colors", {
    defaultValue: initialColors,
  });

  // Fügt eine neu erstellte Farbe ins Array ein
  function handleNewColor({ role, hex, contrastText }) {
    const newColor = { id: uuid(), role, hex, contrastText };
    setColors([newColor, ...colors]);
  }

  // Löscht die Farbe aus dem State und räumt die Bestätigung weg
  function handleDeleteColor(id) {
    setColors(colors.filter((c) => c.id !== id));
  }

  function handleEditColor(id, updatedColor) {
    setColors(
      colors.map((c) =>
        c.id === id
          ? {
              ...c,
              role: updatedColor.role,
              hex: updatedColor.hex,
              contrastText: updatedColor.contrastText,
            }
          : c
      )
    );
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
            onConfirmDelete={() => handleDeleteColor(c.id)}
            onEditColor={(updatedData) => handleEditColor(c.id, updatedData)}
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
