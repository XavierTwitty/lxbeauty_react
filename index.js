import React from "react";
import { render } from "react-dom";
import App from "./components/App";

import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
