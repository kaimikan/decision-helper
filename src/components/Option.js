import React from "react";

// OPTION 1
// export default (props) => {
// React assigns tag as Unknown so not adviced
const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

// OPTION 2
export default Option;
