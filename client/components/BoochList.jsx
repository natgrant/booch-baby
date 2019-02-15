import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { addToCart, navigate } from "../actions";

import BoochListItem from "./BoochListItem";

const BoochList = props => {
  return (
    <Fragment>
      <div className="columns shop-list">
        {props.booch.map((item, idx) => {
          if ((idx - 1) % 3 == 0) {
            return (
              <Fragment>
                {/* <div className="columns"> */}
                <BoochListItem
                  key={item.id}
                  item={item}
                  addToCart={props.addToCart}
                />
              </Fragment>
            );
          } else if (idx % 3 == 0) {
            return (
              <Fragment>
                <BoochListItem
                  key={item.id}
                  item={item}
                  addToCart={props.addToCart}
                />
                {/* </div> */}
              </Fragment>
            );
          }
        })}
      </div>
    </Fragment>
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
