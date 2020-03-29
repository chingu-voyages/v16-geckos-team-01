import React,{useState, useEffect, useRef} from 'react'
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'


export default ({update,id,actName,remove,members})=>{
    const [activity, setActivity]=useState(actName)
    const [editClick, isEditClick]=useState(true)
    const [emojiClick, isEmojiClick]=useState(false)
    const [emoji, setEmoji]=useState([])
    const [deleteComment, isDeleteComment]=useState(false)
 
     //close pop-up by detecting outside clicker 
     const DetectClickOutside=(ref)=> {
        const handleClickOutside=(event)=> {
          if (ref.current && !ref.current.contains(event.target)) {
             isEmojiClick(false)
             isDeleteComment(false)
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


    // activity logic 
    const handdleUpdate=()=>{
        update(id, activity)
        isEditClick(!editClick)
    }
    
    const handleEdit=()=>{
        isEditClick(!editClick)
    }
 
    const handleRemove = () => {
        remove(id)
    }
    
    // emoji logic
    const addEmoji=(newEmoji)=>{
        console.log("emoji: ", emoji)
         if(emoji.filter(i=>i.id=== newEmoji.id).length>0){
            removeEmoji(newEmoji.id)
         }else{
         setEmoji([...emoji, {icon:newEmoji.native, id:newEmoji.id}])
         isEmojiClick(!emojiClick)
         }
    }

    const removeEmoji=(id)=>{
        setEmoji(emoji.filter(i=>i.id!==id))
    }

    let emojiSet=emoji.map(emo=>{
       return <span className="emoji-set" key={emo.id} onClick={()=>removeEmoji(emo.id)}><span className="emoji-span" >{emo.icon}</span> <span className="num-span" >1</span></span>
    })

    console.log(emoji)

    let result;
    if(!editClick){
        result=(
            <div className={ `description-wrap-${editClick?'default':'edit'}`}>
                    <div className="textarea-wrap" >
                        <textarea 
                            className="activity-text" 
                            rows="1" 
                            max_length="50"
                            onChange={e=>setActivity(e.target.value)} 
                            value={activity} 
                            onFocus={e => e.target.select()}
                        />
                    
                        
                        <div className="save-activity" > 
                          <button className={ `save-btn-${!activity?'disabled':'activated'}`} onClick={()=>handdleUpdate()} disabled={!activity}   >Save</button>
                          <div className="i-group">
                             <i className="fas fa-paperclip"></i>
                             <i className="fas fa-at"></i>
                             <i className="far fa-smile"></i>
                             <i className="fas fa-credit-card"></i>
                          </div>
                       </div>
                     </div>
                 </div>
                
        )
    }else{   //`${(activity.length+1)*8}`+'px'
        result = (
            <div className="comment-activity-set">
                <div className="div-act-display" style={{width:`${(activity.length)*0.4}`+'rem'}}> {activity}</div>  
                <div className="function-set">
                    {emojiSet}
                    <i onClick={()=>isEmojiClick(!emojiClick)} className="far fa-smile-wink fa-sm"></i> 
                    -
                    <button onClick={()=>handleEdit()} >Edit</button>
                    -
                    <button onClick={()=>isDeleteComment(true)}  >Delete</button>
                </div>
            
                {emojiClick&&<div className="picker" ref={wrapperRef}><Picker  set="google" onSelect={(i)=>addEmoji(i)} /></div>}
                {deleteComment&&
                <div className="delete-popup"  ref={wrapperRef}>
                    <div className="delete-popup-header">
                        <span>Delete Comment?</span>
                        <i className="fas fa-times fa-xs" onClick={()=>isDeleteComment(!deleteComment)}></i>
                    </div>
                    <hr/>
                    <div className="delete-popup-body">
                        <p>Deleting a comment is forcever. There is no undo.</p>
                        <button onClick={() => handleRemove()}>Delete Comment</button>
                    </div>
                 </div>} 
            </div>
          )
    }

    return(
      <div className="activity">
          <div className="comment-title-set" >
             <button className="initials" type="button">{members[0][0].toUpperCase()}</button>
             <span className="bold-title" >{members[0][0].toUpperCase()}</span>
             <span className="detail-title">just now</span>
          </div>
       
          {result}
     </div>
    )
}