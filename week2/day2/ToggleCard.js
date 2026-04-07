import React, { useState } from "react";

function ToggleCard({ title }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>This is the card content!</p>}
    </div>
  );
}

export default ToggleCard;
