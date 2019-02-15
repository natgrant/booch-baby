import React from "react";

const BoochListItem = props => {
  const details = props.item;
  return (
    <div className="column">
      <img src="./images/kombucha.jpg" />
      <h5>{details.name}</h5>
      <p>{details.description}</p>
      <p>Size: {details.size}</p>
      <p>${details.price}</p>
      <a
        href="#"
        className="cart-link"
        onClick={() => props.addToCart(details.id)}
      >
        Add to cart
      </a>
    </div>
  );
};

export default BoochListItem;
