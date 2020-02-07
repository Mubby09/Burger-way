import React from "react";
import Aux from "../../HOC/Aux";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Chesse", type: "cheese" }
];

const BuildControls = (props) => {
  return (
    <Aux>
      <div>
        Current Price : <i>${props.price.toFixed(2)}</i>
      </div>
      <div className={classes.BuildControls}>
        {controls.map((control) => {
          return (
            <BuildControl
              key={control.label}
              label={control.label}
              added={() => props.ingredientAdded(control.type)}
              removed={() => props.ingredientRemoved(control.type)}
            />
          );
        })}
        <button
          className={classes.OrderButton}
          disabled={props.purchasable}
          onClick={props.ordered}
        >
          ORDER NOW
        </button>
      </div>
    </Aux>
  );
};

export default BuildControls;
