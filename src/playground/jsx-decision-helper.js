// JSX = js xml

const app = {
  title: "Decision Helper",
  subtitle: "Helping YOU Take Action",
  options: []
};

const onFormSubmit = (e) => {
  // prevents page refresh
  e.preventDefault();
  const option = e.target.elements.option.value;
  // if won't trigger if option is an empty string
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderDecisionApp();
  }
};

const onWipeOptions = () => {
  app.options = [];
  renderDecisionApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];

  alert(option);
};

const appRoot = document.getElementById("app");

const renderDecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {/* onWipeOptions instead of onWipeOptions() to make a reference instead of a call */}
      <button onClick={onWipeOptions}>Wipe Options</button>
      {app.subtitle && app.subtitle.length > 0 && <p>{app.subtitle}</p>}
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>
        Pick Option
      </button>
      {
        <ol>
          {app.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ol>
      }

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderDecisionApp();
