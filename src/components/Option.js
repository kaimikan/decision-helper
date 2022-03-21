import React from "react";

// OPTION 1
// export default (props) => {
// React assigns tag as Unknown so not adviced
const Option = (props) => (
  <div>
    {props.optionText}
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      X
    </button>
  </div>
);

// OPTION 2
export default Option;
