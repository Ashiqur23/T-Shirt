import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let massage 
  if (cart.length === 0) {
    massage = <p>please add some product</p>
  }
  return (
    <div>
      <h2>Order Summary {cart.length}</h2>
      {massage}
      {cart.map((tShirt, index) => (
        <p key={index}>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
