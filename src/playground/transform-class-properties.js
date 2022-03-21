// with the help of "babel-plugin-transform-class-properties": "6.24.1",
class OldSyntax {
  constructor() {
    this.name = "Test";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `hi, name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

// -------------

class NewSyntax {
  name = "Test 2";
  getGreeting = () => {
    return `hi, name is ${this.name}`;
  };
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
