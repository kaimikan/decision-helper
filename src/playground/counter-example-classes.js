class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
      name: "Our State Name Example"
    };
  }

  handleAddOne() {
    // this is used to change value and render at the same time
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleRemoveOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });

    // setState is asynchronous so two calls back to back might end up to using stale/old data, that is why we use prevState
    // this.setState({
    //   count: this.state.count + 1
    // });

    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   };
    // });
  }

  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleRemoveOne}>-1</button>
        <button onClick={this.handleReset}>00</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
