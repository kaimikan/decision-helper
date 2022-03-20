// example this. binding break
const obj = {
  name: "test name",
  getName() {
    return this.name;
  }
};

// this context does not get transferred
const getNameConst = obj.getName;
console.log(getNameConst());
// we use bind() to fix context
const getNameProperConst = obj.getName.bind(obj);
console.log(getNameProperConst());

ReactDOM.render(<h1>this. scope testing</h1>, document.getElementById("app"));
