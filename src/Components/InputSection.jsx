import React, { useState } from "react";

function InputArea(props) {
  const [todoText, setTodoText] = useState("");
  function handleChange(event) {
    const newTodoValue = event.target.value;
    setTodoText(newTodoValue);
  }

  function handleKeyDown(event) {
    const eventKey = event.key;
    if (eventKey === "Enter") {
      props.handleClickFunction(todoText);
      setTodoText("");
    }
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        value={todoText}
      />
      <button
        onClick={() => {
          props.handleClickFunction(todoText);
          setTodoText("");
        }}
        className="addTodoBtn"
      >
        Add
      </button>
    </div>
  );
}

export default InputArea;
