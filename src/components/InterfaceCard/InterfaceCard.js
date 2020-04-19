import React, { useState } from "react";
import Title from "./componentsOfInterfaceCard/Title";
import Item from "./componentsOfInterfaceCard/Item";
import AddAnotherCard from "./componentsOfInterfaceCard/AddAnotherCard";

export default ({
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
    return item.map((i) => (
      <Item
        key={i.id}
        cardName={i.cardName}
        id={i.id}
        titleName={titleName}
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

      <AddAnotherCard getItem={getItem} />
    </div>
  );
};
