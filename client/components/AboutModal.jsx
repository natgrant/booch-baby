import React, { Component } from "react";
import { Modal } from "react-bulma-components/full";

class AboutModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    if (this.props.isShowing) {
      return (
        <div className="modal is-active">
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">About </p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.props.onHide}
              />
            </header>
            <section className="modal-card-body">
              Welcome to Booch Baby! <br />
              It takes about two weeks to make a bottle of Booch Baby Kombucha.
              A symbiotic culture of bacteria and yeast, or a SCOBY, is put in a
              sweetened tea brew and the bacteria feed on the sugars converting
              them into organic acids, which gives kombucha its iconic tang. The
              ferment is all but halted once we’ve achieved the perfect balance.
            </section>
            <footer className="modal-card-foot" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AboutModal;

//TODO: add this modal to the 'About' onclick event!
