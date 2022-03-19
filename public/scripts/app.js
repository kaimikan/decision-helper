"use strict";

// JSX = js xml

var app = {
  title: "Decision Helper",
  subtitle: "Helping YOU Take Action",
  options: ["Option 1", "Option 2"]
};

function getOptions(options) {
  /*
  FIXME was trying to do smth like this
  var optionsListJSX = "";
  if (options.length > 0)
    for (var i = 0; i <= options.length; i++)
      optionsListJSX += <li>{options[i]}</li>;
  var optionsFullJSX = <ol>{optionsListJSX}</ol>;
  return { optionsFullJSX };
  */
  if (options) return React.createElement(
    "ol",
    null,
    options.map(function (option) {
      return React.createElement(
        "li",
        null,
        option
      );
    })
  );
}

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && app.subtitle.length > 0 && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  getOptions(app.options)
);

// second template with comments
var user = {
  name: "Kai",
  age: 22,
  location: "Deventer"
};

function getLocation(location) {
  if (location) return React.createElement(
    "p",
    null,
    "Location: ",
    location
  );
  // the function will return undefined by default so no need to type out
  //return undefined;
}

var templateCredentials = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name /* this is assumed !== undefined*/
    ? user.name.toUpperCase() + "!" : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
