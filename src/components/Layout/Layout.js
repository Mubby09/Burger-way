import React from "react";
import Aux from "../../HOC/Aux";

const Layout = (props) => {
  return (
    <Aux>
      <h3>Toolbar, Sidebar, Backdrop</h3>
      {props.children}
    </Aux>
  );
};

export default Layout;
