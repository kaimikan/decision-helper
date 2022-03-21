import React from "react";

const Action = (props) => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.handlePick}
    >
      Suggest Action
    </button>
  </div>
);

export default Action;
