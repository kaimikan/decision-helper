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
ReactDOM.render(templateCredentials, appRoot);
