import React,{useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';



export default ({members, create})=>{
    const [clickComment,isClickComment]=useState(false)
    const [form, setForm]=useState({task:''})
    console.log("form: ", form)

    const handleSave=(e)=>{
       
       create({...form, id:uuidv4(), completed:false })
       setForm({task: ''})
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
                <button onClick={(e)=>handleSave(e)}>Save</button>
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