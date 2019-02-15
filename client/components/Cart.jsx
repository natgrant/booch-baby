import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

import { navigate, deleteFromCart, updateCart } from "../actions";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart
    };
  }

  update(id, quantity) {
    this.setState({
      cart: this.state.cart.map(item => {
        if (item === id) item.quantity = Number(quantity);
        return item;
      })
    });
  }

  deleteItem(id) {
    const cart = this.state.cart.filter(item => item.id !== id);
    this.setState({ cart });
    this.props.deleteFromCart(id);
  }

  render() {
    return (
      <div>
        <table className="$table-row-active-background-color $table-color	">
          <thead>
            <tr>
              <th>Booch</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item, id) => {
              return (
                <CartItem
                  key={id}
                  item={item}
                  update={this.update.bind(this)}
                  deleteFromCart={this.deleteItem.bind(this)}
                />
              );
            })}
          </tbody>
        </table>
        <br />
        <p className="tile">
          <a href="#" onClick={this.props.keepShopping}>
            Continue Shopping
          </a>
          {/* <button onClick={() => this.props.updateCart(this.state.cart)} /> */}
          <a class="button is-success is-rounded">Checkout</a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    keepShopping: () => dispatch(navigate("listing")),
    deleteFromCart: id => dispatch(deleteFromCart(id)),
    updateCart: cart => dispatch(updateCart(cart))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);