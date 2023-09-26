import React, { useState } from "react";
import './ProjectAdd.css'
import Modal from "../Modal/Modal";

function ProjectAdd(props) {
  const { onClose, addProject } = props;
  const [inputText, setInputText] = useState( "");

  const submission = (e) => {
    e.preventDefault();
    if(inputText.length > 0) addProject(inputText)
  };

  return (
    <Modal className="project-add-modal" onClose={onClose}>
      <form
        className="project-add-modal-form"
        // className={`custom-input-edit ${editClass ? editClass : ""}`}
        onSubmit={submission}
      >
        <input
          type="text"
          value={inputText}
          placeholder="Name project"
          onChange={(event) => setInputText(event.target.value)}
          autoFocus
        />
        <div className="project-add-modal-footer">
          <button type="submit">Add project</button>
        </div>
      </form>
    </Modal>);
}

export default ProjectAdd;
