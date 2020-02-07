import React from "react";
import classes from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <div>
    <ul className={classes.NavigationItems}>
      <li>
        <a href="/">
          <em>BURGER</em>
        </a>
      </li>
      <li>
        <a href="/">
          <em>CHECKOUT</em>
        </a>
      </li>
    </ul>
  </div>
);
export default navigationItems;
