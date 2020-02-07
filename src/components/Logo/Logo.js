import React from "react";
import BurgerLogo from "../../Assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="Burger Logo" />
  </div>
);
export default logo;
