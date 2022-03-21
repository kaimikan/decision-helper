import React from "react";
import ReactDOM from "react-dom";
import DecisionHelperApp from "./components/DecisionHelperApp";
// if you don't specify path it auto looks in node_modules
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<DecisionHelperApp />, document.getElementById("app"));
