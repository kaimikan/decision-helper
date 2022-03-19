"use strict";

// JSX = js xml

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "if you are seeing this babel is not connected properly"
  ),
  React.createElement(
    "p",
    null,
    "added this version of app.js to .gitignore to prevent unneeded masses of lines added/substracted"
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
