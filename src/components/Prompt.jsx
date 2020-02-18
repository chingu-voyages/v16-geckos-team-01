import React from 'react';

function Prompt({name,title,addName,addTitle,promptSubmit}) {
    
  return (
    <div className="prompt">
        <form onSubmit={promptSubmit}>
            <input type="text" placeholder="Add name" onChange={addName} value={name}/>
            <input type="text" placeholder="Add board title" onChange={addTitle} value={title}/>
            <button type="submit" disabled={!(name && title)}>Get started <i className="fas fa-angle-double-right"></i></button>
        </form>
    </div>
  );
}

export default Prompt;
