import React, { useState } from "react";

function ListItems(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [initialValue, setInitialValue] = useState(0);

  function handleLineDecoration() {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="listItemsinComponents">
      <li
        onClick={handleLineDecoration}
        key={props.keyindex}
        id={props.id}
        style={{
          backgroundColor: props.id % 2 === 0 ? "#50aaa7" : "#65c397",
          textDecoration: isClicked ? "line-through" : "none"
        }}
      >
        {props.text}
      </li>
      {/* <p className="generatedTime">00:00</p> */}

      <button
        className="cancelBtn"
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.deletedItemsFunction(props.id);
        }}
      >
        &#x2716;
      </button>
    </div>
  );
}

export default ListItems;
