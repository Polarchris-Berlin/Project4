import "./Color.css";

export default function Color({ color }) {
  return (
    <div
      className="color-card"
      style={{
        backgroundColor: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-hex">{color.hex}</h3>
      <h4 className="color-card-role">{color.role}</h4>
      <p className="color-card-contrast">
      contrast: {color.contrastText}</p>
    </div>
  );
}
