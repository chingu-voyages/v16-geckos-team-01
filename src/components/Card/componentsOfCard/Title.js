import React, { useState } from "react";
  

export default ({ todos, setTodos }) => {
  const [title, setTitle] = useState(todos);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    setTodos(title);
  };

//   const handleToggle = e => {
//     setIsEditing(true);
//   };

    
  let result = (
    <div  className="title">
      
        <input
          type="text"
          value={title}
          name="title"
          onFocus={e => e.target.select()}
          onBlur={e => handleSubmit(e)}
          onChange={e => handleChange(e)}
          onKeyPress={e=>e.key==="Enter"&&handleSubmit(e)}
        />
        <i className="fas fa-ellipsis-h"></i>

     
    </div>
  );

  return <div>{result}</div>;
};
