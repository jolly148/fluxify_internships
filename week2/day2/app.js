import React from "react";
import Counter from "./Counter";
import ToggleCard from "./ToggleCard";
import ColorPicker from "./ColorPicker";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <div>
      <h1>Day 2: Props & State</h1>
      <Counter />
      <ToggleCard title="My Toggle Card" />
      <ColorPicker colors={["red", "green", "blue", "yellow"]} />
      <ShoppingCart />
    </div>
  );
}

export default App;
