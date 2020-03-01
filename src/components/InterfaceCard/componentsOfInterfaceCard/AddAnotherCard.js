import React,{useState} from 'react'
import AddCardDialog from './AddCardDialog'

export default ({getItem})=>{
    const [isAdd,setIsAdd]=useState(false)
    
    const handleAddACard=()=>{
        setIsAdd(!isAdd)
       
    }
    return(
        <div>
            {isAdd?<AddCardDialog getItem={getItem} setIsAdd={setIsAdd}/>:<div className="addAnotherCard" onClick={handleAddACard}><i className="fa fa-plus fa-xs"></i>Add another card</div>
            }
        </div>
    )
}