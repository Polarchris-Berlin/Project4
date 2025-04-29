// React selbst wird für JSX benötigt (ab React 17 nicht immer nötig, aber hier importiert)
import React from "react";
// ReactDOM für das Mounten der React-App ins DOM
import ReactDOM from "react-dom/client";
// Unsere Haupt-Komponente
import App from "./App.jsx";
// Globale Styles für die gesamte Anwendung
import "./index.css";

// ReactDOM.createRoot: Initialisiert die Wurzel der React-App.
// document.getElementById("root"): Holt das <div id="root"> aus index.html.
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode> hilft, potenzielle Probleme frühzeitig zu erkennen
  <React.StrictMode>
    {/* Unsere App-Komponente */}
    <App />
  </React.StrictMode>
);
