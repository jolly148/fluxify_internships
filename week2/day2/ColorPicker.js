import React, { useState } from "react";

function ColorPicker({ colors }) {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <div>
      <h3>Selected Color: {selected}</h3>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color, margin: "5px" }}
          onClick={() => setSelected(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColorPicker;
