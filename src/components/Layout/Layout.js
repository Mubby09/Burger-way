import React from "react";
import Aux from "../../HOC/Aux";
import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "../UI/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      {props.children}
    </Aux>
  );
};

export default Layout;
