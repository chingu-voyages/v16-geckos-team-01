import React, { useState } from "react";
import AddCardDialog from "./AddCardDialog";

export default ({ cardId, getItem, addNewTodo }) => {
  const [isAdd, setIsAdd] = useState(false);

  const handleAddACard = () => {
    setIsAdd(true);
  };
  return (
    <div>
      {isAdd ? (
        <AddCardDialog
          getItem={getItem}
          setIsAdd={setIsAdd}
          addNewTodo={addNewTodo}
          cardId={cardId}
        />
      ) : (
        <div className="addAnotherCard" onClick={handleAddACard}>
          <i className="fa fa-plus fa-xs"></i>Add another card
        </div>
      )}
    </div>
  );
};
