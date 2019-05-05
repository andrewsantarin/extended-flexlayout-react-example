import * as React from "react";
import { render } from "react-dom";

import App from "./demo/App";

import "./demo/styles/flexlayout-light.css";
import "./demo/styles/light.css";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
