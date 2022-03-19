/*const square = */ function square(x) {
  return x * x;
}
console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// };

// we do not need to explicitly use return in arrow functions
const squareArrow = (x) => x * x;

console.log(squareArrow(9));

// const getFirstName = (fullName) => {
//   return fullName.split(" ")[0];
// };

const getFirstName = (fullName) => fullName.split(" ")[0];

console.log(getFirstName("Mike Wazowski"));

// ---

// argument object - no longer bound with arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

const addArrows = (a, b) => {
  // not defined in arrows functions console.log(arguments);
  return a + b;
};

// this keyword - no longer bound

const user = {
  name: "Kai",
  cities: ["Vratsa", "Deventer"],
  printPlacesLived: function () {
    // workaround for scope problem in forEach
    const that = this;
    console.log(this.name);
    console.log(this.cities);

    // #1 normal function = closed scope
    this.cities.forEach(function (city) {
      // this.name is not accessible here
      console.log(that.name + " has lived in " + city);
    });

    // #2 with arrow the scope is 1 level up
    this.cities.forEach((city) => {
      console.log(this.name + " has lived in " + city);
    });
  },
  // // not proper because of rule #2
  // printPlacesLivedES6Fail: () => {
  //   this.cities.forEach((city) => {
  //     console.log(this.name + " has lived in " + city);
  //   });
  // },
  printPlacesLivedES6() {
    this.cities.forEach((city) => {
      console.log(this.name + " has lived in " + city);
    });
  },
  printPlacesLivedES6Map() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  }
};
//user.printPlacesLived();
//user.printPlacesLivedES6();
console.log(user.printPlacesLivedES6Map());

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());
