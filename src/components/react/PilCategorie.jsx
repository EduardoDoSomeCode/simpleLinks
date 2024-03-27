import { useState } from "react";
import "../css/simplePil.css";
import { addTheme } from "../../nodeStore";

const PilCategorie = ({ title, spaceLeft }) => {
  const [nameTheme, setNameTheme] = useState("");
  const ShowValueClick = () => {
    setNameTheme(title);
    addTheme(title);
  };

  return (
    <div style={{ position: "absolute" }}>
      <div
        onClick={ShowValueClick}
        className="pil-Card"
        style={{ left: `${spaceLeft}px` }}
      >
        <span style={{ fontSize: "1rem" }}>{title}</span>
      </div>
    </div>
  );
};

export default PilCategorie;
