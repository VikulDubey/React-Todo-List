import React, { useEffect, useState } from "react";
import ListItems from "./ListItems";
import InputArea from "./InputSection";
import Heading from "./Heading";

function App() {
  const [todoArray, setTodoArray] = useState([]);

  function handleClick(todoText) {
    setTodoArray((prevValue) => {
      return [...prevValue, todoText];
    });
  }

  function deletedItems(id) {
    setTodoArray((prevValue) => {
      return prevValue.filter((arrayItems, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Heading />
      <InputArea handleClickFunction={handleClick} />
      <div className="listItem">
        <ul>
          {todoArray.map((arrayItem, index) => {
            return (
              <ListItems
                keyindex={index}
                id={index}
                text={arrayItem}
                deletedItemsFunction={deletedItems}
                // creationTime={setTime}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
