import { useState, useEffect } from "react";
import "./Color.css";
import { Trash2 } from "lucide-react";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onConfirmDelete, onEditColor }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  function requestDeleteColor() {
    setIsDeleting(!isDeleting);
  }

  function cancelDelete() {
    setIsDeleting(false);
  }
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
      <div className="color-card-header">
        <h3 className="color-card-highlight">{color.role}</h3>
        <div className="action-buttons">
          {/* Delete-Button */}
          <button onClick={requestDeleteColor} className="delete-btn">
            <Trash2 className="delete-icon" />
          </button>
          {/* Edit-Button */}
          <button onClick={() => setIsEditing(!isEditing)} className="edit-btn">
            ✏️
          </button>
        </div>
      </div>

      {isDeleting == true && (
        <div className="delete-confirm">
          <p className="color-card-highlight">Delete this color?</p>
          <button onClick={onConfirmDelete}>Yes</button>
          <button onClick={cancelDelete}>No</button>
        </div>
      )}

      {isEditing && (
        <ColorForm
          initialRole={color.role}
          initialHex={color.hex}
          initialContrastText={color.contrastText}
          onSubmitColor={(updatedData) => {
            onEditColor(updatedData);
            setIsEditing(false);
          }}
        />
      )}

      {!isEditing && (
        <>
          <p className="color-code">{color.hex}</p>
          <p>contrast: {color.contrastText}</p>
        </>
      )}
    </div>
  );
}
