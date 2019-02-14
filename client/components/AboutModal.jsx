import React from "react";
import { Modal } from "react-bulma-components/full";

const AboutModal = () => {
  return (
    <div class="modal">
      <div class="modal-background" />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">About</p>
          <button class="delete" aria-label="close" />
        </header>
        <section class="modal-card-body">
          It takes about two weeks to make a bottle of Booch Baby Kombucha. A
          symbiotic culture of bacteria and yeast, or a SCOBY, is put in a
          sweetened tea brew and the bacteria feed on the sugars converting them
          into organic acids, which gives kombucha its iconic tang. The ferment
          is all but halted once we’ve achieved the perfect balance.
        </section>
        <footer class="modal-card-foot" />
      </div>
    </div>
  );
};

export default AboutModal;

//TODO: add this modal to the 'About' onclick event!
