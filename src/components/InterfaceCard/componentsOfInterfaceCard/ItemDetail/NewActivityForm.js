import React,{useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';



export default ({members, create})=>{
    const [clickComment,isClickComment]=useState(false)
    const [form, setForm]=useState({task:''})
   

  

    const handleSave=(e)=>{
         // for comparing the latest timestamp in Activity.js
       let date=new Date().getTime();
       localStorage.setItem("data", JSON.stringify(date))
       let myDate=JSON.parse(localStorage.getItem("data"))

       e.stopPropagation()
       create({...form, id:uuidv4(),timeStamp:myDate })
       setForm({task: ''})
       isClickComment(false)
       divRef.current.textContent=""
    }

    const divRef=useRef(null)
   
    return(
        <div className="new-activity-form">
        <div className="comment-text-area">
             <button className="initials" type="button">{members[0][0].toUpperCase()}</button>
             <div className="textarea-wrap" onClick={()=>isClickComment(true)}  >
                <div 
                    className="comment-text" 
                    contentEditable 
                    suppressContentEditableWarning 
                    placeholder="Write a comment..."
                    ref={divRef}
                    onInput={e => setForm({...form, task: e.currentTarget.innerText})}
                >
             </div>
                {clickComment===true&& 
                <div className="save-comment" >
                    <button className={ `save-btn-${!form.task?'disabled':'activated'}`} onClick={(e)=>handleSave(e)} disabled={!form.task}>Save</button>
                    <div className="i-group">
                    <i className="fas fa-paperclip"></i>
                    <i className="fas fa-at"></i>
                    <i className="far fa-smile"></i>
                    <i className="fas fa-credit-card"></i>
                    </div>
                </div>
               }
            </div>
        </div> 
        </div>
    )
}