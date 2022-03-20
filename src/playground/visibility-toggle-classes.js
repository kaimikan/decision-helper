class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.state = {
      isVisible: false
    };
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          Toggle Visibility {this.state.isVisible ? <p>ON</p> : <p>OFF</p>}
        </button>
        {this.state.isVisible ? <p>Hidden Text</p> : <p></p>}
        {this.state.isVisible && <p>Another Hidden Text</p>}
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("app"));
