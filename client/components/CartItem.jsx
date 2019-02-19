import React from "react"
import {connect} from 'react-redux'

const CartItem = props => {
  const name = getNameFromId(props.item.id, props.booch);
  return (
    <tr>
      <td>{name}</td>
      <td>
        <input
          value={props.item.quantity}
          onChange={e => props.update(props.item.id, e.target.value)}
        />
      </td>
      <td>
        <div onClick={() => props.deleteFromCart(props.item.id)}>
          <span className="delete" />
        </div>
      </td>
    </tr>
  );
};

function getNameFromId(id, boochData) {
  const booch = boochData.find(booch => booch.id === id);
  return booch.name;
}

function mapStateToProps(state) {
  return {
    booch: state.booch
  }
}

export default connect(mapStateToProps)(CartItem)
