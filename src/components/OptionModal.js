import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={props.modalOpen}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    style={{
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      }
    }}
  >
    <div class="modal__container">
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.handleClearSelectedOption}>
        Gotcha
      </button>
    </div>
  </Modal>
);

export default OptionModal;
