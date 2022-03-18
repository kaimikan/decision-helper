// JSX = js xml
"use strict";

var template = React.createElement("p", { id: "someid" }, "JSX from app.js");
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
