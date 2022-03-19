var nameVar = "Kai";
// this is valid so could cause problems in a big project
var nameVar = "Kaloyan";
console.log("nameVar", nameVar);

let nameLet = "Kaii";
// cannot redefine again is let nameLet = ... is invalid
nameLet = "Kaloyann";
console.log("nameLet", nameLet);

const nameConst = "Kaiii";
// cannot change so -> is invalid nameConst = "Kaloyannn";
console.log("nameConst", nameConst);

// block scoping

const fullName = "Kai Kan";
let firstName;
if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

//should be defined as let or const above if if we want it to work
console.log(firstName);

//TODO
// CONST first
// LET if we need to
// VAR never
