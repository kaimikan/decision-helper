// in the other file in which we import this:
/*
//import "./import-export.js";
import subtractFromUtils, { square, add } from "./import-export.js"; // { square } is from the export in import-export.js
// default export is outside of brackets or
// import subtract from "./import-export.js"; // since it's default name does not have to match

we can also ignore .js so -> //import "./import-export";
*/

console.log("utils.js is running");

const square = (x) => x * x;
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// export types - 1. default export, 2. named exports
// # 1 default export
export { subtract as default };
// const subtract = (a, b) => a - b;
// export default subtract
// OR
// export default (a, b) => a - b;
// * this rule has an exception for classes so  export default class AddOption extends React.Component {...} is valid
// # 2 named export
export { square, add };
//export const add = (a, b) => a + b;
