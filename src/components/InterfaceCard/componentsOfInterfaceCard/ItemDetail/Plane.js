import React,{useState,useEffect,useRef} from 'react'
import NewActivityForm from './NewActivityForm'
import Activity from './Activity'



export default ({cardName,isPop, setIsPop, titleName, members})=>{
  
  
    const [clickDescription, isClickDescription]=useState(false)
    const [descriptionClass, setDescriptionClass]=useState("default")
    const [descriptionInput, setDescriptionInput]=useState("")
    // const [clickComment,isClickComment]=useState(false)
    const [activities,setActivities]=useState([])
   
    // activity logic
    const create = newActivity=>{
        setActivities([...activities, newActivity])
    }
    
    const update=(id, updatedActivity)=>{
        const updatedActivities=activities.map(act=>{
            if(act.id===id){
                return{...act, task: updatedActivity}
            }
            return act
        })
        setActivities(updatedActivities)
    }

    // description logic
    const handleClickDescription=()=>{
        setDescriptionClass("show")
        isClickDescription(true)
    }
    const handleSaveDescription=()=>{
        if(descriptionInput===""){
          setDescriptionClass("default")
          isClickDescription(false)
        }else{
          setDescriptionClass("hide")
          isClickDescription(false)
        }
    }

     //close pop-up by detecting outside clicker 
    const DetectClickOutside=(ref)=> {
        const handleClickOutside=(event)=> {
          if (ref.current && !ref.current.contains(event.target)) {
            setIsPop(false)
         
          }
        }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      });
    }
    const wrapperRef=useRef(null)
    DetectClickOutside(wrapperRef)

    // console.log("descriptionClass: ",descriptionClass)
    // console.log("clickDescription: ", clickDescription)
    // console.log("description input: ", descriptionInput)
    console.log("activities: ",activities)

    const showActivity=activities.map(act=>{
        return(
             <Activity key={act.id} id={act.id} actName={act.task} update={update}/>
        )
    })
    return(
        <div className="plane" ref={wrapperRef}>
            <i onClick={()=>{setIsPop(false)}} className="closePlane fas fa-times fa-sm"></i>

            <div className="window-header">
                <i className="fas fa-credit-card"></i>
                <span className="bold-title" >{cardName}</span>
                <p className="sub-title" >in list <span className="title-name">{titleName}</span></p>
            </div>

            <div className="window-main-col">
                <i className="fas fa-align-justify"></i>
                <span className="bold-title" >Description</span>
                {descriptionClass==='hide'&&<button className="descriptionEditBtn" onClick={()=>handleClickDescription()}>Edit</button>}
                <div className={ `description-wrap-${descriptionClass}`}>
                    <div 
                      className="descript-text"  
                      contentEditable 
                      suppressContentEditableWarning 
                      spellCheck="false"
                      placeholder="Add a more detailed description" 
                      onClick={()=>handleClickDescription()}
                      onInput={e => setDescriptionInput(e.currentTarget.innerText)}
                    >
                    </div>
                    {clickDescription===true&&
                    <div> 
                        <button onClick={()=>handleSaveDescription()} >Save</button>
                        <i onClick={()=>handleSaveDescription()} className="closeDescription fas fa-times fa-sm"></i>
                    </div>
                     }
                </div>
                <i className="fas fa-tasks"></i>
                <span className="bold-title" >Activity</span>
                <button className="show-detail-btn">Show Details</button>
                <NewActivityForm members={members} create={create}/>
                {/* <div className="comment-text-area">
                    <button className="initials" type="button">{members[0][0].toUpperCase()}</button>
                    <div className="textarea-wrap" onClick={()=>isClickComment(true)}  >
                        <div 
                            className="comment-text" 
                            contentEditable 
                            suppressContentEditableWarning 
                            placeholder="Write a comment..."
                            name="task"
                            onInput={e => setActivity({...form, task: e.currentTarget.innerText})}
                        >
                        </div>
                         {clickComment===true&& 
                             <div className="save-comment" >
                                <button>Save</button>
                             <div className="i-group">
                                <i className="fas fa-paperclip"></i>
                                <i className="fas fa-at"></i>
                                <i className="far fa-smile"></i>
                                <i className="fas fa-credit-card"></i>
                              </div>
                            </div>
                         }
                    </div>
                </div>  */}
                {showActivity}
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