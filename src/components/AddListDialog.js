import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default ({ addNewCard, getListInfo, setAddAList }) => {
  const [listTitle, setListTitle] = useState("");

  const AddList = (e) => {
    e.preventDefault();
    listTitle === "" ? setAddAList(true) : addNewCard(listTitle);
    setAddAList(false);
  };
  const CancelList = () => {
    setAddAList(false);
  };

  const inputRef = useRef();

  return (
    <div className="addListDialog">
      <form onSubmit={(e) => AddList(e)}>
        <input
          ref={inputRef}
          type="text"
          name="listTitle"
          placeholder="Enter list title..."
          onChange={(e) => setListTitle(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              AddList(e);
              inputRef.current.blur();
            }
          }}
        />
        <br />
        <button className="addBtn">Add List</button>
        <button className="cancelBtn" type="button" onClick={CancelList}>
          <i className="fas fa-times fa-lg"></i>
        </button>
      </form>
    </div>
  );
};
