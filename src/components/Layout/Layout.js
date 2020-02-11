import React, { Component } from "react";
import Aux from "../../HOC/Aux";
import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "../UI/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  menuClickhandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar menuClicked={this.menuClickhandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        {this.props.children}
      </Aux>
    );
  }
}

export default Layout;
