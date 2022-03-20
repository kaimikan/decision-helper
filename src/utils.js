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
// # 2 named export
export { square, add };
//export const add = (a, b) => a + b;
