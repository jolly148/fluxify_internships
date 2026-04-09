import React, { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Controlled Input</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Your name: {name}</p>
    </div>
  );
}

export default ControlledInput;
