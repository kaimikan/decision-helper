import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class DecisionHelperApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    modalOpen: false
  };

  handleDeleteOptions = () => {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });

    // notice the ({}) brackets when returning an object (otherwise it would be seen as an empty method)
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const randomOption = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: randomOption,
      modalOpen: true
    }));
  };

  handleClearSelectedOption = () => {
    // we do this to keep the selected option on screen long enough to have a smooth transition
    this.setState(() => ({
      modalOpen: false
    }));
    setTimeout(
      function () {
        this.setState({ selectedOption: undefined });
      }.bind(this),
      200
    );
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    // this.setState((prevState) => {
    //   return {
    //     // concat creates a third array with the new element instead of changing the state or prevState one
    //     options: prevState.options.concat(option)
    //   };
    // });

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };

  // lifecycle methods only available in class React.Component extending elements
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) this.setState(() => ({ options }));
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // we have the if cause the update triggers if options [] is replaced with []
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  // localStorage only works with string data, to save an array we use json (JSON.stringify -> JSON.parse)

  render() {
    const title = "Decision Helper";
    const subtitle = "get some help with decision making";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          modalOpen={this.state.modalOpen}
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
