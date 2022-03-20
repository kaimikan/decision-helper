let count = 0;
const addOne = () => {
  count++;
  console.log("add one", count);
  renderCounterApp();
};
const removeOne = () => {
  count--;
  console.log("remove one");
  renderCounterApp();
};
const reset = () => {
  count = 0;
  console.log("reset");
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  // re-rendering is needed if we want the functions to show the updated
  // value of count, otherwise the variable changes but the JSX remains static

  // behind the scenes react does not re-render everything that remains static
  // only the changed JSX

  // notice className instead of class
  const templateCount = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} id="add-btn-id" className="button">
        +1
      </button>
      <button onClick={removeOne} id="remove-btn-id" className="button">
        -1
      </button>
      <button onClick={reset} id="reset-btn-id" className="button">
        reset
      </button>
    </div>
  );

  ReactDOM.render(templateCount, appRoot);
};

renderCounterApp();
