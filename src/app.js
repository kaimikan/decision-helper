class DecisionHelperApp extends React.Component {
  render() {
    const title = "Decision Helper";
    const subtitle = "get some assistance with decision making";
    const options = ["option 1", "option 2", "option 3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

//uppercase class first letter is mandatory when extending React Component
class Header extends React.Component {
  // render must be called when we extend React Component
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>Suggest Action</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option}></Option>
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <p>{this.props.optionText}</p>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption</div>;
  }
}

ReactDOM.render(<DecisionHelperApp />, document.getElementById("app"));
