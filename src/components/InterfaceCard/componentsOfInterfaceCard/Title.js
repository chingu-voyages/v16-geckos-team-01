import React, { useState, useRef } from "react";
import ListActions from './ListActions'

export default ({ titleName, handleTitleChange,titleId, archiveList }) => {
  const [title, setTitle] = useState(titleName);
  const [isEllipsisClicked, setIsEllipsisClicked ]=useState(false)

  const handleChange = e => {
    setTitle(e.target.value);
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
          onBlur={()=>handleTitleChange(title,titleId)}
          onChange={e => handleChange(e)}
          onKeyPress={e=>{
            if(e.key==="Enter"){handleTitleChange(title,titleId);inputRef.current.blur()}}}
        />
        <button onClick={handleClicked}><i className="fas fa-ellipsis-h fa-sm"></i></button>
        {isEllipsisClicked&&<ListActions archiveList={archiveList} titleId={titleId} isEllipsisClicked={isEllipsisClicked}  setIsEllipsisClicked={setIsEllipsisClicked} />} 
    </div>
  );
   console.log(titleName)
  return <div>{result}</div>;
};
