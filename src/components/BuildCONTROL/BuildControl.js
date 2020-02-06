import React from "react";
import Aux from "../../HOC/Aux";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
  return (
    <Aux>
      <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.More} onClick={props.added}>
          More
        </button>
        <button className={classes.Less} onClick={props.removed}>
          Less
        </button>
      </div>
    </Aux>
  );
};

export default BuildControl;
