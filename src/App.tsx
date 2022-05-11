import React, { Fragment } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { withResizeDetector } from 'react-resize-detector';

/// Components
import Markup from "./jsx";
/// Style
import "./css/style.css";
import { ToastContainer } from "react-toastify";

const App = (size: any) => {
  console.log("Width ", size.width);
  const body: any = document.querySelector("body");

  size.width >= 1300
    ? body.setAttribute("data-sidebar-style", "mini")
    : size.width <= 1299 && size.width >= 767
      ? body.setAttribute("data-sidebar-style", "mini")
      : body.setAttribute("data-sidebar-style", "overlay");
  return (
    <Fragment>
      <Markup />
      <ToastContainer />
    </Fragment>
  );
};

export default withResizeDetector(App);
