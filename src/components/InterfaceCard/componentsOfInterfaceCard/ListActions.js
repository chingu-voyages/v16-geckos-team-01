import React from 'react'

export default ({ isEllipsisClicked, setIsEllipsisClicked })=>{
     

    return(
        <div className="listActions">
                <span>ListAction </span> 
                <i  onClick={()=>{setIsEllipsisClicked(!isEllipsisClicked)}} className="fas fa-times fa-xs"></i>
            <hr/>
            <ul>
                <li onClick={() => {
            setIsEllipsisClicked(false);
          }}>Add Card...</li>
                <li>Copy List...</li>
                <li>Move List...</li>
                <li>Watch</li>
                <hr/>
                <li>Sort By...</li>
                <hr/>
                <li>Move All Cards in This List...</li>
                <li>Archive All Cards in This List...</li>
                <hr/>
                <li>Archive This List</li>
            </ul>
            
        </div>

    )
}