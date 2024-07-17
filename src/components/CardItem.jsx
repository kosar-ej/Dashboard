import React from "react";

const CardItem = ({ text, number }) => {
  return (
    <div className="flex-coulmn">
      <span className="card-text">{text}</span>
      <span className="card-number">{number}</span>
    </div>
  );
};

export default CardItem;
