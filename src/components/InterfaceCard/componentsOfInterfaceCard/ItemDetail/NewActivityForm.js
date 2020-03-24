import React,{useState} from 'react'
 



export default ({members})=>{
    const [clickComment,isClickComment]=useState(false)
    const [form, setForm]=useState({task:''})
    console.log("form: ", form)
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
                name="task"
                onInput={e => setForm({...form, task: e.currentTarget.innerText})}
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
        </div> 
        </div>
    )
}