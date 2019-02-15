import React from "react";
import { connect } from "react-redux";

import { addToCart, navigate } from "../actions";

import BoochListItem from "./BoochListItem";


const BoochList = props => {
  return (
    <div>
      <p>
        Welcome! Please select from our delicious selection and don't hesitate
        to let us know if we can answer any of your questions.
      </p>
      {props.booch.map(item => {
        return (
          <BoochListItem
            key={item.id}
            item={item}
            addToCart={props.addToCart}
          />
        );
      })}
    </div>
  );
};


const mapStateToProps = state => {
  return {
    booch: state.booch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
      dispatch(navigate("cart"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoochList);
