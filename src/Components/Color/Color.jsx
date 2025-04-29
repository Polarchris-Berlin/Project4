import "./Color.css";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Color({ color }) {
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
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
    </div>
  );
}
