import React, { useState } from "react";
  

export default ({ todos, setTodos }) => {
  const [title, setTitle] = useState(todos);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTodos(title);

    setIsEditing(false);
  };

//   const handleToggle = e => {
//     setIsEditing(true);
//   };

  let result = (
    <div>
      <form>
        <input
          className="title-input"
          type="text"
          value={title}
          name="title"
          onFocus={e => e.target.select()}
          onBlur={e => handleSubmit(e)}
          onChange={e => handleChange(e)}
        />
       
      </form>
     
    </div>
  );

  return <div>{result}</div>;
};
