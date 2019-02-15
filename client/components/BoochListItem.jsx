import React from "react";

const BoochListItem = props => {
  const details = props.details;
  return (
    <div className="column description">
      <img src="./images/kombucha.jpg" class="booch-image" />
      <h5>
        <strong>{details.name}</strong>
      </h5>
      <p>{details.description}</p>
      <p>
        <strong>Size:</strong> {details.size}
      </p>
      <p id="price">
        <strong>Cost: </strong>${details.price}
      </p>
    </div>
  );
};

export default BoochListItem;
