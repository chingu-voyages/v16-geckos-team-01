import React, { useState, useRef } from "react";
import ListActions from './ListActions'

export default ({ todos, handleTitleChange,titleId }) => {
  const [title, setTitle] = useState(todos);
  const [isEllipsisClicked, setIsEllipsisClicked ]=useState(false)

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit =()=> {
    handleTitleChange(title, titleId);
  };
  
  const handleClicked=()=>{
      setIsEllipsisClicked(!isEllipsisClicked)
  }
  const inputRef=useRef();
    
  let result = (
    <div  className="title">
      
        <input
          ref={inputRef}
          type="text"
          value={title}
          name="title"
          onFocus={e => e.target.select()}
          onBlur={handleSubmit()}
          onChange={e => handleChange(e)}
          onKeyPress={e=>{
            if(e.key==="Enter"){handleSubmit(e);inputRef.current.blur()}}}
        />
        <button onClick={handleClicked}><i className="fas fa-ellipsis-h fa-sm"></i></button>
        {isEllipsisClicked&&<ListActions isEllipsisClicked={isEllipsisClicked}  setIsEllipsisClicked={setIsEllipsisClicked} />} 
    </div>
  );
   console.log(todos)
  return <div>{result}</div>;
};
