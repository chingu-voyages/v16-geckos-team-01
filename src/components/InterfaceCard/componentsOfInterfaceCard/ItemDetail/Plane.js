import React,{useEffect,useRef} from 'react'

export default ({cardName,isPop, setIsPop, titleName})=>{
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
            <i onClick={()=>{setIsPop(!isPop)}} className="fas fa-times fa-sm"></i>
            <div className="window-header">
                <i className="fas fa-credit-card"></i>
                <span className="bold-title" >{cardName}</span>
                <p className="sub-title" >in list <span className="title-name">{titleName}</span></p>
            </div>
            <div className="window-main-col">
            <i className="fas fa-align-justify"></i>
            <span className="bold-title" >Description</span>
            <div className="descript-text">
                <textarea rows = "3" cols = "29"   placeholder="Add a more detailed description"></textarea>
            </div>
            
             
            </div>
            <div className="window-sidebar">
           
                <p>Window sidebar</p>
            </div>
            
        </div>
    )
}