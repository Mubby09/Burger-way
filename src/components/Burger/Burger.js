import React from "react";
import Aux from "../../HOC/Aux";
import classes from "./Burger.module.css";
import BurgerIngre from "../BurgerIngre/BurgerIngre";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngre key={ingredientKey + i} type={ingredientKey} />;
      });
    })
    .flat();

  if (transformedIngredients.length === 0)
    transformedIngredients = <div> Start Adding Your Ingredients</div>;
  //   console.log(transformedIngredients);
  //   const arr = transformedIngredients.flat(); Flattening nested array!!!
  //   console.log(arr);

  return (
    <Aux>
      <div className={classes.Burger}>
        <BurgerIngre type="bread-top" />
        {transformedIngredients}
        <BurgerIngre type="bread-bottom" />
      </div>
    </Aux>
  );
};

export default Burger;
