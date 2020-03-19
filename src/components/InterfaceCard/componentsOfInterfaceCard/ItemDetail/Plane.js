import React,{useEffect,useRef} from 'react'

export default ({cardName,isPop, setIsPop, titleName, members})=>{
       //close pop-up by detecting outside clicker 
       const DetectClickOutside=(ref)=> {
        const handleClickOutside=(event)=> {
          if (ref.current && !ref.current.contains(event.target)) {
            setIsPop(false)
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
    return(
        <div className="plane" ref={wrapperRef}>
            <i onClick={()=>{setIsPop(false)}} className="fas fa-times fa-sm"></i>
            <div className="window-header">
                <i className="fas fa-credit-card"></i>
                <span className="bold-title" >{cardName}</span>
                <p className="sub-title" >in list <span className="title-name">{titleName}</span></p>
            </div>
            <div className="window-main-col">
                <i className="fas fa-align-justify"></i>
                <span className="bold-title" >Description</span>
                <div className="descript-text">
                    <textarea rows = "3"  placeholder="Add a more detailed description"></textarea>
                </div>
    
                <i className="fas fa-tasks"></i>
                <span className="bold-title" >Activity</span>
                <button className="show-detail-btn">Show Details</button>
                <div className="comment-text">
                    <button className="initials" type="button">{members[0][0].toUpperCase()}</button>
                    <div className="tarea" contentEditable suppressContentEditableWarning placeholder="Write a comment..."></div>
                </div>
                
             
            </div>
            <div className="window-sidebar">
           
            <p className="add-to-card" > ADD TO CARD</p>
            <ul>
                <li><i className="far fa-user"></i> Members </li>
                <li><i className="fas fa-tag"></i> Labels </li>
                <li><i className="far fa-check-square"></i> Checklist </li>
                <li><i className="far fa-clock"></i> Due Date </li>
                <li><i className="fas fa-paperclip"></i> Attachment </li>
                <li><i className="far fa-credit-card"></i> Cover </li>
            </ul>

            <p className="add-to-card" > POWER-UPS </p>
            <ul><li style={{textAlign:"center"}}> Get Power-Ups</li></ul>

             <p className="add-to-card"> ACTIONS </p>
            <ul>
                <li><i className="fas fa-arrow-right"></i> Move </li>
                <li><i className="far fa-copy"></i> Copy </li>
                <li><i className="fab fa-centos"></i> Make Template </li>
                <li><i className="far fa-eye"></i> Watch </li>
                <li><i className="fas fa-archive"></i> Achive </li>
                <li><i className="fas fa-share-alt"></i> Share </li>
            </ul>
            </div>
            
        </div>
    )
}