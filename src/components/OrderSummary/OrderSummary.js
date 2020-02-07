import React from "react";
import Aux from "../../HOC/Aux";
import Button from "../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (ingredientKey) => {
      return (
        <li key={ingredientKey} style={{ listStyle: "none" }}>
          <span style={{ textTransform: "capitalize" }}>{ingredientKey} </span>{" "}
          : {props.ingredients[ingredientKey]}
        </li>
      );
    }
  );
  return (
    <Aux>
      <div>
        <h3>YOUR ORDER</h3>
        <p>DELICIOUS BURGER WITH YOUR DESIRED INGREDIENTS!</p>
        <ul>{ingredientSummary}</ul>
        <p>Total Price : ${props.price}</p>
        <Button btnType="Success" clicked={props.purchaseContinue}>
          CHECKOUT
        </Button>
        <Button btnType="Danger" clicked={props.purchaseCanceled}>
          CANCEL
        </Button>
      </div>
    </Aux>
  );
};

export default orderSummary;
