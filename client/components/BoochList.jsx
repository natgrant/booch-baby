import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { addToCart, navigate } from "../actions";

import BoochListItem from "./BoochListItem";

class BoochList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kombucha: props.booch
    };
  }

  render() {
    console.log(this.state.kombucha);
    return (
      <Fragment>
        {this.state.kombucha.map((item, idx) => {
          if ((idx - 1) % 3 == 0) {
            return (
              <Fragment>
                {/* <div className="columns"> */}
                <BoochListItem key={idx} details={item} />
              </Fragment>
            );
          } else if (idx % 3 == 0) {
            return (
              <Fragment>
                <BoochListItem key={idx} details={item} />
                {/* </div> */}
              </Fragment>
            );
          }
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
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
