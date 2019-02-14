import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { addToCart, navigate } from "../actions";

import BoochListItem from "./BoochListItem";

class BoochList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kombucha: [
        {
          id: 1,
          name: "Coffee Kombucha",
          description:
            "An experimental blend of kombucha and coffee, using Peoples Coffee Beans",
          size: "500 ml",
          price: 5.99,
          image: ""
        },
        {
          id: 2,
          name: "Blueberry and Ginger",
          description: "Kombucha with organic blueberry and ginger",
          size: "500 ml",
          price: 5.99,
          image: ""
        },
        {
          id: 3,
          name: "Blueberry and Ginger",
          description: "Kombucha with organic blueberry and ginger",
          size: "1 litre",
          price: 9.99,
          image: ""
        }
      ]
    };
  }

  render() {
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
