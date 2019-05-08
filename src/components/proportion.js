import React from "react";

const Proportion = props => {
  return (
    <div>
    <h3>{props.ingredient.ingredient_name}</h3>
    <h3>{props.ingredient.amount}</h3>
    </div>
  );
};

export default Proportion;
