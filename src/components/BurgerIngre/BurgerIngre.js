import React from "react";
import classes from "./BurgerIngre.module.css";
import Aux from "../../HOC/Aux";
import PropTypes from "prop-types";

const BurgerIngre = (props) => {
  let ingre = "";
  switch (props.type) {
    case "bread-bottom":
      ingre = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingre = (
        <Aux>
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        </Aux>
      );
      break;
    case "meat":
      ingre = <div className={classes.Meat}></div>;
      break;
    case "cheese":
      ingre = <div className={classes.Cheese}></div>;
      break;
    case "salad":
      ingre = <div className={classes.Salad}></div>;
      break;
    case "bacon":
      ingre = <div className={classes.Bacon}></div>;
      break;
    default:
      ingre = null;
  }
  return ingre;
};

BurgerIngre.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngre;
