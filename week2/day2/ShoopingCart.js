import React, { useState } from "react";

function Product({ name, price, addToCart }) {
  return (
    <div>
      <h4>{name} - ${price}</h4>
      <button onClick={() => addToCart({ name, price })}>Add to Cart</button>
    </div>
  );
}

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <Product name="Apple" price={1} addToCart={addToCart} />
      <Product name="Banana" price={2} addToCart={addToCart} />
      <Product name="Orange" price={3} addToCart={addToCart} />

      <h3>Items in Cart:</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
