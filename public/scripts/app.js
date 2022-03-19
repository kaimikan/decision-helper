"use strict";

/*const square = */function square(x) {
  return x * x;
}
console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// };

// we do not need to explicitly use return in arrow functions
var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(9));

// const getFirstName = (fullName) => {
//   return fullName.split(" ")[0];
// };

var getFirstName = function getFirstName(fullName) {
  return fullName.split(" ")[0];
};

console.log(getFirstName("Mike Wazowski"));

// ---

// argument object - no longer bound with arrow functions

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

var addArrows = function addArrows(a, b) {
  // not defined in arrows functions console.log(arguments);
  return a + b;
};

// this keyword - no longer bound

var user = {
  name: "Kai",
  cities: ["Vratsa", "Deventer"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    // workaround for scope problem in forEach
    var that = this;
    console.log(this.name);
    console.log(this.cities);

    // #1 normal function = closed scope
    this.cities.forEach(function (city) {
      // this.name is not accessible here
      console.log(that.name + " has lived in " + city);
    });

    // #2 with arrow the scope is 1 level up
    this.cities.forEach(function (city) {
      console.log(_this.name + " has lived in " + city);
    });
  },
  // // not proper because of rule #2
  // printPlacesLivedES6Fail: () => {
  //   this.cities.forEach((city) => {
  //     console.log(this.name + " has lived in " + city);
  //   });
  // },
  printPlacesLivedES6: function printPlacesLivedES6() {
    var _this2 = this;

    this.cities.forEach(function (city) {
      console.log(_this2.name + " has lived in " + city);
    });
  },
  printPlacesLivedES6Map: function printPlacesLivedES6Map() {
    var _this3 = this;

    return this.cities.map(function (city) {
      return _this3.name + " has lived in " + city;
    });
  }
};
//user.printPlacesLived();
//user.printPlacesLivedES6();
console.log(user.printPlacesLivedES6Map());

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 5,
  multiply: function multiply() {
    var _this4 = this;

    return this.numbers.map(function (number) {
      return _this4.multiplyBy * number;
    });
  }
};

console.log(multiplier.multiply());
