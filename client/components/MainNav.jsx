import React, { Component } from "react";
import { Navbar } from "react-bulma-components/full";
import AboutModal from "./AboutModal";

class BoochNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleChange = () => {
    this.setState({
      showModal: true
    });
  };

  handleClose() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="main-nav">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="https://img.icons8.com/ios/50/000000/soda-bottle.png" />
            </a>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Home
              </a>
              <a className="navbar-item" onClick={this.handleChange}>
                About
              </a>
            </div>
            <AboutModal
              isShowing={this.state.showModal}
              onHide={this.handleClose}
            />
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>My Cart</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default BoochNavbar;
