import React,{useState} from 'react'

 


export default ({update,id,actName,remove,members})=>{
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
    }else{   //`${(activity.length+1)*8}`+'px'
        result = (
            <div className="comment-activity-set">
                <div style={{width:`${(activity.length)*6.5}`+'px'}}> {activity}</div>  
                <button onClick={()=>handleEdit()} >Edit</button>
                <button onClick={() => handleRemove()} >X</button>
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