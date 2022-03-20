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
  handlePick() {
    alert("pick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>Suggest Action</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    // ^ bare minimum
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // ^ makes sure the context is always correct (this way we do no need to add .bind(this) to individual method calls)
  }
  handleRemoveAll() {
    alert(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  // e stands for event
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<DecisionHelperApp />, document.getElementById("app"));
