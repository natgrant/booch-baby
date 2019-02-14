import React from "react";

const BoochListItem = props => {
  const details = props.details;
  return (
    <div className="column">
      <img src="./images/kombucha.jpg" />
      <h5>{details.name}</h5>
      <p>{details.description}</p>
      <p>Size: {details.size}</p>
      <p>${details.price}</p>
    </div>
  );
};

export default BoochListItem;
