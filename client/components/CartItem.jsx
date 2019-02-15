import React from "react";

import boochData from "../../data/booch";

const CartItem = props => {
  const name = getNameFromId(props.item.id);
  return (
    <tr>
      <td>{name}</td>
      <td>
        <input
          value={props.item.quantity}
          onChange={e => props.update(props.item.id, e.target.value)}
        />
      </td>
      <button onClick={() => props.deleteFromCart(props.item.id)}>
        <span className="delete" />
      </button>
      <td />
    </tr>
  );
};

function getNameFromId(id) {
  const booch = boochData.kombucha.find(booch => booch.id === id);
  return booch.name;
}

export default CartItem;
