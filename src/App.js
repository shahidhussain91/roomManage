import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Group from "@material-ui/icons/Group";
import RemoveCircle from "@material-ui/icons/RemoveCircle";
import AddCircle from "@material-ui/icons/AddCircle";
import LocalHotel from "@material-ui/icons/LocalHotel";
import AccessibilityNew from "@material-ui/icons/AccessibilityNew";
import Person from "@material-ui/icons/Person";
import Divider from "@material-ui/core/Divider";
import Layout from "./layout/Layout";

const styles = {
  mainPage: (pageHeight) => ({
    height: pageHeight - 120,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  spareContainer: {
    width: "44%",
    height: "38%",
    border: "1px solid #607D8B",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    color: "#2196F3",
  },
  spareChild: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "16px 0px",
    flex: 1,
  },
  spareChildLeft: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#2196F3",
  },
  spareChildRight: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dividerStyle: {
    height: "2px",
    backgroundColor: "rgba(158, 158, 158, 0.43)",
  },
  localHotelIcon: {
    height: "1.2em",
    width: "1.2em",
  },
  removeIcon: {
    color: "#2196F3",
    height: "1.2em",
    width: "1.2em",
  },
  addIcon: {
    color: "#ff5722cf",
    height: "1.2em",
    width: "1.2em",
  },
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeight: window.innerHeight,
      roomCount: 1,
      adultCount: 1,
      childrenCount: 0,
      maxAdult: 4,
      minAdult: 1,
      minChild: 0,
      maxChild: 0,
    };
  }
  handleAddAdult = () => {
    if (this.state.roomCount > 0 && this.state.roomCount < 5) {
      this.setState({ roomCount: this.state.roomCount + 1 }, () => {
        this.setState({
          minAdult: this.state.roomCount,
          maxAdult: this.state.roomCount * 4,
        });
        this.handleCall();
      });
    }
  };
  handleRemoveAdult = () => {
    if (this.state.roomCount <= 5 && this.state.roomCount > 1)
      this.setState({ roomCount: this.state.roomCount - 1 }, () => {
        this.handleCall();
      });
  };
  handleCall = () => {
    var x = this.state.roomCount;
    switch (x) {
      case (x = 1):
        return this.setState({ adultCount: this.state.adultCount + 1 });
      case (x = 2):
        return this.setState({ adultCount: this.state.adultCount + 1 });
      case (x = 3):
        return this.setState({ adultCount: this.state.adultCount + 1 });
      case (x = 4):
        return this.setState({ adultCount: this.state.adultCount + 1 });
      case (x = 5):
        return this.setState({ adultCount: this.state.adultCount + 1 });
    }
  };
  handleAddMoreAdult = () => {
    let countCheck = this.state.adultCount + this.state.childrenCount;
    if (
      this.state.maxAdult > this.state.adultCount &&
      countCheck < this.state.maxAdult
    )
      this.setState({ adultCount: this.state.adultCount + 1 });
  };
  handleRemoveMoreAdult = () => {
    if (this.state.minAdult < this.state.adultCount) {
      this.setState({ adultCount: this.state.adultCount - 1 });
    }
  };
  handleAddChild = () => {
    let countCheck = this.state.adultCount + this.state.childrenCount;
    let max = this.state.maxAdult - this.state.minAdult;
    if (max > this.state.childrenCount && countCheck < this.state.maxAdult) {
      this.setState({ childrenCount: this.state.childrenCount + 1 });
    }
  };
  handleRemoveChild = () => {
    if (this.state.childrenCount > 0) {
      this.setState({ childrenCount: this.state.childrenCount - 1 });
    }
  };
  render() {
    const { pageHeight, roomCount } = this.state;
    const { classes } = this.props;
    return (
      <Layout appBar footer>
        <div style={styles.mainPage(pageHeight)}>
          <div style={{ width: "44%", marginBottom: "10px" }}>
            <span className={classes.headerContainer}>
              <Group style={{ marginRight: "6px" }} />
              Choose number of <b style={{ marginLeft: "4px" }}>People</b>
            </span>
          </div>
          <div className={classes.spareContainer}>
            <div className={classes.spareChild}>
              <div className={classes.spareChildLeft}>
                <LocalHotel className={classes.localHotelIcon} />
                <span style={{ marginLeft: "16px" }}>ROOMS</span>
              </div>
              <div className={classes.spareChildRight}>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleRemoveAdult();
                  }}
                >
                  <RemoveCircle className={classes.removeIcon} />
                </IconButton>

                <span>{roomCount}</span>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleAddAdult();
                  }}
                >
                  <AddCircle className={classes.addIcon} />
                </IconButton>
              </div>
            </div>
            <Divider className={classes.dividerStyle} />
            <div className={classes.spareChild}>
              <div className={classes.spareChildLeft}>
                <Person className={classes.localHotelIcon} />
                <span style={{ marginLeft: "16px" }}>ADULT</span>
              </div>
              <div className={classes.spareChildRight}>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleRemoveMoreAdult();
                  }}
                >
                  <RemoveCircle className={classes.removeIcon} />
                </IconButton>
                <span>{this.state.adultCount}</span>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleAddMoreAdult();
                  }}
                >
                  <AddCircle className={classes.addIcon} />
                </IconButton>
              </div>
            </div>
            <Divider className={classes.dividerStyle} />
            <div className={classes.spareChild}>
              <div className={classes.spareChildLeft}>
                <AccessibilityNew className={classes.localHotelIcon} />
                <span style={{ marginLeft: "16px" }}>CHILDREN</span>
              </div>
              <div className={classes.spareChildRight}>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleRemoveChild();
                  }}
                >
                  <RemoveCircle className={classes.removeIcon} />
                </IconButton>
                <span>{this.state.childrenCount}</span>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleAddChild();
                  }}
                >
                  <AddCircle className={classes.addIcon} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default withStyles(styles)(App);
