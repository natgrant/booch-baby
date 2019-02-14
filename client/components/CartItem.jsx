import React from "react";

import boochData from "../..data/beers";

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
        <span className="fa fa-trash fa-2x" />
      </button>
      <td />
    </tr>
  );
};

function getNameFromID(id) {
  const booch = boochData.booch.find(booch => booch.id === id);
  return booch.name;
}

export default CartItem;
