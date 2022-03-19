class Person {
  constructor(name = "Anon", age = 0) {
    this.name = name; // || 'test';
    this.age = age;
  }

  getGreeting() {
    //return "Hi, I am " + this.name + "!";
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major = "Undecided") {
    // calls parent constructor function
    // also handles default values
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    // the double !! returns true or false no matter if empty string, undefinedm etc.
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = "") {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` Visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler("Kai", 22, "Vratsa");
console.log(me.getGreeting());

const other = new Student();
console.log(other.getDescription());
