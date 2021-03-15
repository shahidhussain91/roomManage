import React, { Component } from "react";
import AppBar from "../component/AppBar";
import Footer from "../component/Footer";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  drawerStyle: { width: "25%" },
};
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }
  handleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };
  render() {
    const { appBar, footer, classes } = this.props;
    const top = appBar && (
      <AppBar {...this} {...this.state} handleDrawer={this.handleDrawer} />
    );
    const bottom = footer && <Footer />;

    return (
      <div>
        {top}
        {this.props.children}
        {bottom}
        <Drawer
          open={this.state.drawerOpen}
          onClose={this.handleDrawer}
          PaperProps={{
            className: classes.drawerStyle,
          }}
        >
          <div role="button">{/* <h1>DRAWER</h1> */}</div>
        </Drawer>
      </div>
    );
  }
}
export default withStyles(styles)(Layout);
