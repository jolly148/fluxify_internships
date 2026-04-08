import React, { useState, useEffect } from "react";

function LifecycleDemoHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted or updated!");

    return () => {
      console.log("Unmounted!");
    };
  }, [count]); // runs whenever count changes

  return (
    <div>
      <h2>Hooks Lifecycle Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LifecycleDemoHooks;
