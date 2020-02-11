import React, { Component } from "react";
import Aux from "../../HOC/Aux";
import Button from "../UI/Button/Button";

class OrderSummary extends Component {
  componentDidMount() {
    console.log("[OrderSummary] Did Update");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (ingredientKey) => {
        return (
          <li key={ingredientKey} style={{ listStyle: "none" }}>
            <span style={{ textTransform: "capitalize" }}>
              {ingredientKey}{" "}
            </span>{" "}
            : {this.props.ingredients[ingredientKey]}
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
          <p>Total Price : ${this.props.price}</p>
          <Button btnType="Success" clicked={this.props.purchaseContinue}>
            CHECKOUT
          </Button>
          <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
            CANCEL
          </Button>
        </div>
      </Aux>
    );
  }
}

export default OrderSummary;
