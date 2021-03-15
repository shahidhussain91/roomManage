import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "0px",
          width: "100%",
          height: "56px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>© Copyright Innoventes 2021</span>
      </div>
    );
  }
}
export default Footer;
