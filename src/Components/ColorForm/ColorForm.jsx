// Import der ColorInput–Komponente, die Text- und Farb-Picker synchronisiert
import ColorInput from "../ColorInput/ColorInput";
// Stylesheet für das Layout des Formulars
import "./ColorForm.css";

/**
 * ColorForm-Komponente
 *
 * Props:
 * - onSubmitColor: Callback-Funktion, die das ausgefüllte Formular-Objekt erhält
 * - initialData: Vorgabewerte für Role, Hex und Contrast Text (als Objekt)
 */
export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  /**
   * handleSubmit
   * - Verhindert das Standard-Reload beim Formular-Submit
   * - Liest alle Felder via FormData aus
   * - Wandelt sie in ein JS-Objekt um
   * - Ruft onSubmitColor mit diesen Werten auf
   */
  function handleSubmit(event) {
    event.preventDefault(); // kein Neuladen der Seite
    const formData = new FormData(event.target); // alle Eingaben sammeln
    const data = Object.fromEntries(formData); // in { role, hex, contrastText }-Objekt umwandeln
    onSubmitColor(data); // Callback an die übergeordnete Komponente
  }

  return (
    // Form mit CSS-Klasse und unserem submit-Handler
    <form className="color-form" onSubmit={handleSubmit}>
      {/* Role-Feld */}
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role} // Vorgabewert aus initialData
        />
      </label>
      <br />

      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput
          id="hex"
          defaultValue={initialData.hex} // Vorgabewert für das Text- und Color-Input
        />
      </label>
      <br />

      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
