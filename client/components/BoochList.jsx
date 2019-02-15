import React from "react";
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
    return (
      <Fragment>
        <div className="columns shop-list">
          {this.state.kombucha.map((item, idx) => {
            if ((idx - 1) % 3 === 0) {
              return <BoochListItem key={item.id} details={item} />;
            } else if (idx % 3 === 0) {
              return <BoochListItem key={item.id} details={item} />;
            }
          })}
        </div>
      </Fragment>
    );
  }
}


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
