"use strict";

// JSX = js xml

var app = {
  title: "Decision Helper",
  subtitle: "Helping YOU Take Action",
  options: ["Option 1", "Option 2"]
};

function getOptions(options) {
  /*
  FIXME Warning: Each child in an array or iterator should have a unique "key" prop.
  */
  if (options)
    return React.createElement(
      "ol",
      null,
      options.map(function (option) {
        return React.createElement("li", null, option);
      })
    );
}

var template = React.createElement(
  "div",
  null,
  React.createElement("h1", null, app.title),
  app.subtitle &&
    app.subtitle.length > 0 &&
    React.createElement("p", null, app.subtitle),
  getOptions(app.options)
);

// SECOND template with comments
var user = {
  name: "Kai",
  age: 22,
  location: "Deventer"
};

function getLocation(location) {
  if (location) return React.createElement("p", null, "Location: ", location);
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
      ? user.name.toUpperCase() + "!"
      : "Anonymous"
  ),
  user.age &&
    user.age >= 18 &&
    React.createElement("p", null, "Age: ", user.age),
  getLocation(user.location)
);

//ReactDOM.render(templateCredentials, appRoot);

// THIRD template

var count = 0;
var addOne = function addOne() {
  count++;
  console.log("add one", count);
  renderCounterApp();
};
var removeOne = function removeOne() {
  count--;
  console.log("remove one");
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  console.log("reset");
  renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  // re-rendering is needed if we want the functions to show the updated
  // value of count, otherwise the variable changes but the JSX remains static

  // behind the scenes react does not re-render everything that remains static
  // only the changed JSX

  // notice className instead of class
  var templateCount = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Count: ", count),
    React.createElement(
      "button",
      { onClick: addOne, id: "add-btn-id", className: "button" },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: removeOne, id: "remove-btn-id", className: "button" },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset, id: "reset-btn-id", className: "button" },
      "reset"
    )
  );

  ReactDOM.render(templateCount, appRoot);
};

renderCounterApp();
