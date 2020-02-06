import React from "react";
import classes from "./Button.module.css";
// import Aux from "../../../HOC/Aux";

const button = (props) => (
  <button
    onClick={props.clicked}
    className={[classes.Button, classes[props.btnType]].join(" ")}
  >
    {props.children}
  </button>
);

export default button;
