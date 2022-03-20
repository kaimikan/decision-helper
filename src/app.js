//import "./utils.js";
import subtractFromUtils, { square, add } from "./utils.js"; // { square } is from the export in utils.js
// default export is outside of brackets or
// import subtract from "./utils.js"; // since it's default name does not have to match

import isSenior, { isAdult, canDrink } from "./person.js";

console.log("app.js is running!");
console.log(square(5));
console.log(add(230, 23));
console.log(subtractFromUtils(19, 2));

console.log(isAdult(5));
console.log(canDrink(23));
console.log(isSenior(65));
