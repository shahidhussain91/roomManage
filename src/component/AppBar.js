import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class AppBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AppBar position="static" style={{ backgroundColor: "#3F51B5" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={(e) => {
              e.preventDefault();
              this.props.handleDrawer();
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}
export default AppBarComponent;
