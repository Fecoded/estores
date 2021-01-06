import React, { Fragment } from "react";

import Routes from "./pages";
import { ToastContainer, Zoom } from "react-toastify";

// Styles
import "./styles/style.css";

const App = () => {
  return (
    <Fragment>
      <Routes />
      <ToastContainer draggable={false} transition={Zoom} autoClose={3000} />
    </Fragment>
  );
};

export default App;
