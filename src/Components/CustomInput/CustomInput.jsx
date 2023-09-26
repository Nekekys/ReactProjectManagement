import React, { useEffect, useState } from "react";

import { X } from "react-feather";

import "./CustomInput.css";

function CustomInput(props) {
  const {
    text,
    id,
    onSubmit,
    displayClass,
    editClass,
    placeholder,
    defaultValue,
    buttonText,
    onDragEnter,
    clearComment
  } = props;
  const [isCustomInput, setIsCustomInput] = useState(false);
  const [inputText, setInputText] = useState(defaultValue || "");

  const submission = (e) => {
    e.preventDefault();
    if (inputText && onSubmit) {
      setInputText("");
      onSubmit(inputText);
    }
    setIsCustomInput(false);
  };

  useEffect(()=>{
    if(!isCustomInput && clearComment){
      clearComment()
    }
  }, [isCustomInput])

  return (
    <div className="custom-input"  onDragEnter={() => onDragEnter(id)}>
      {isCustomInput ? (
        <form
          className={`custom-input-edit ${editClass ? editClass : ""}`}
          onSubmit={submission}
        >
          <input
            type="text"
            value={inputText}
            placeholder={placeholder || text}
            onChange={(event) => setInputText(event.target.value)}
            autoFocus
          />
          <div className="custom-input-edit-footer">
            <button type="submit">{buttonText || "Add"}</button>
            <X onClick={() => setIsCustomInput(false)} className="closeIcon" />
          </div>
        </form>
      ) : (
        <p
          className={`custom-input-display ${displayClass ? displayClass : ""}`}
          onClick={() => setIsCustomInput(true)}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default CustomInput;
