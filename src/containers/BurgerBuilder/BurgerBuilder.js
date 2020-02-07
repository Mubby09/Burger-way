import React, { Component } from "react";
import Aux from "../../HOC/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildCONTROL/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const ingredientsPrices = {
  salad: 1.3,
  bacon: 0.7,
  cheese: 0.5,
  meat: 1.2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false
  };

  updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((ingredientKey) => {
        return ingredients[ingredientKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchasable: sum > 0
    });
  };

  addIngredient = (type) => {
    let oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = ingredientsPrices[type];
    const basePrice = this.state.totalPrice;
    const AllRoundPrice = priceAddition + basePrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: AllRoundPrice
    });
    this.updatePurchasable(updatedIngredients);
  };

  reduceIngredient = (type) => {
    let oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = ingredientsPrices[type];
    const basePrice = this.state.totalPrice;
    const AllRoundPrice = basePrice - priceDeduction;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: AllRoundPrice
    });
    this.updatePurchasable(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  purchaseContinueHandler = () => {
    alert("You continued");
  };

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          ModalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            price={this.state.totalPrice.toFixed(2)}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.reduceIngredient}
          price={this.state.totalPrice}
          purchasable={this.state.updatePurchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
