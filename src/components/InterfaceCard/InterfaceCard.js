import React, { useState } from "react";
import Title from "./componentsOfInterfaceCard/Title";
import Item from "./componentsOfInterfaceCard/Item";
import AddAnotherCard from "./componentsOfInterfaceCard/AddAnotherCard";

export default ({
  controls,
  card,
  titleName,
  handleTitleChange,
  titleId,
  archiveList,
  members,
}) => {
  const [item, setItem] = useState([]);

  const getItem = (it) => {
    setItem([...item, it]);
  };

  const displayItem = () => {
    return card.todos.map((todo) => (
      <Item
        key={todo.id}
        cardName={todo.todoTitle}
        id={todo.id}
        titleName={card.todoTitle}
        members={members}
      />
    ));
  };

  console.log("item: ", item);
  return (
    <div className="interfaceCard">
      <Title
        titleName={card.cardTitle}
        titleId={card.id}
        handleTitleChange={handleTitleChange}
        archiveList={archiveList}
      />

      {displayItem()}

      <AddAnotherCard
        getItem={getItem}
        addNewTodo={controls.addNewTodo}
        cardId={card.id}
      />
    </div>
  );
};
