import { useEffect } from "react";
import "./Color.css";
import { Trash2 } from "lucide-react";

export default function Color({
  color,
  onRequestDelete,
  onConfirmDelete,
  onCancelDelete,
  showConfirm,
}) {
  useEffect(() => {
    console.log("Find Issue 1");
  }, []);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {/* Header mit Role und Delete-Button */}
      <div className="color-card-header">
        <h3 className="color-card-highlight">{color.role}</h3>
        <button onClick={onRequestDelete} className="delete-btn">
          <Trash2 className="delete-icon" />
        </button>
      </div>

      {/* Confirmation-Block direkt unter dem Header */}
      {showConfirm && (
        <div className="delete-confirm">
          <p className="color-card-highlight">Delete this color?</p>
          <button onClick={onConfirmDelete}>Yes</button>
          <button onClick={onCancelDelete}>No</button>
        </div>
      )}

      {/* Farbdetails */}
      <p className="color-code">{color.hex}</p>
      <p>contrast: {color.contrastText}</p>
    </div>
  );
}
