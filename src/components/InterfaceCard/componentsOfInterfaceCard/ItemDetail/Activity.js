import React,{useState} from 'react'

 


export default ({update,id,actName,remove})=>{
    const [activity, setActivity]=useState(actName)
    const [editClick, isEditClick]=useState(true)
    
    // const handleSaveComment=(e)=>{
    //     e.stopPropagation()
        
    // }
 
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
    let result;
    if(!editClick){
        result=(
            <div className={ `description-wrap-${editClick?'default':'edit'}`}>
                    <div className="textarea-wrap" >
                         {/* <div 
                            className="activity-text"  
                            contentEditable 
                            suppressContentEditableWarning 
                            spellCheck="false"
                            ref={divRef}
                            onInput={e => setActivity(e.currentTarget.innerText)}
                         >
                        </div> */}
                        <input 
                            className="activity-text" 
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
    }else{
        result = (
            <div>
                <p> {activity}</p>  
                <button onClick={()=>handleEdit()} >Edit</button>
                <button onClick={() => handleRemove()} >X</button>
            </div>
          )
    }

    return(
      <div className="activity">
          {result}
     </div>
    )
}