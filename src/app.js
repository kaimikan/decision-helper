// JSX = js xml

const app = {
  title: "Decision Helper",
  subtitle: "Helping YOU Take Action",
  options: ["Option 1", "Option 2"]
};

function getOptions(options) {
  /*
  FIXME Warning: Each child in an array or iterator should have a unique "key" prop.
  */
  if (options)
    return (
      <ol>
        {options.map((option) => (
          <li>{option}</li>
        ))}
      </ol>
    );
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && app.subtitle.length > 0 && <p>{app.subtitle}</p>}
    {getOptions(app.options)}
  </div>
);

// second template with comments
const user = {
  name: "Kai",
  age: 22,
  location: "Deventer"
};

function getLocation(location) {
  if (location) return <p>Location: {location}</p>;
  // the function will return undefined by default so no need to type out
  //return undefined;
}

const templateCredentials = (
  <div>
    <h1>
      {user.name /* this is assumed !== undefined*/
        ? user.name.toUpperCase() + "!"
        : "Anonymous"}
    </h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
