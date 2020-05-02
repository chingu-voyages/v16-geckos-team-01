import React,{useRef,useEffect} from 'react'

export default ({ isEllipsisClicked, setIsEllipsisClicked,cardId,archiveList})=>{
    
 

    //close pop-up by detecting outside clicker 
    const DetectClickOutside=(ref)=> {
        const handleClickOutside=(event)=> {
          if (ref.current && !ref.current.contains(event.target)) {
             setIsEllipsisClicked(false)
          }
        }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      });
    }
    const wrapperRef=useRef(null)
    DetectClickOutside(wrapperRef)

    console.log("list id: ",cardId)
    return(
        <div className="listActions" ref={wrapperRef}>
                <div className="action-header">
                <span>ListAction </span> 
                <i  onClick={()=>{setIsEllipsisClicked(!isEllipsisClicked)}} className="fas fa-times fa-xs"></i>
                </div>
            <hr/>
            <ul>
                <li onClick={() => {
            setIsEllipsisClicked(false);
          }}>Add Card...</li>
                <li >Copy List...</li>
                <li>Move List...</li>
                <li>Watch</li>
                <hr/>
                <li>Sort By...</li>
                <hr/>
                <li>Move All Cards in This List...</li>
                <li>Archive All Cards in This List...</li>
                <hr/>
                <li onClick={()=>archiveList(cardId)}>Archive This List</li>
            </ul>
            
        </div>

    )
}