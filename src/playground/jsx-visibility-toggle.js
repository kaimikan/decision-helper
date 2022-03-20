let isVisible = false;

const toggleVisibility = () => {
  isVisible = !isVisible;
  renderVisibilityToggle();
};

// replaced with a call inside ReactDOM.render(...)
//const appRoot = document.getElementById("app");

const renderVisibilityToggle = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        Toggle Visibility: {isVisible ? <p>ON</p> : <p>OFF</p>}
      </button>
      {isVisible ? <p>Here is the hidden text</p> : <p></p>}
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};

renderVisibilityToggle();
