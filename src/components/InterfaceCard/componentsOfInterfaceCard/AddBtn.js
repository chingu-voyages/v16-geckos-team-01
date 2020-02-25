import React,{useState} from 'react'
import AddCardDialog from './AddCardDialog'
export default ()=>{
    const [isAdd,setIsAdd]=useState(false)
    const addACard=()=>{
        setIsAdd(!isAdd)
    }
    return(
        <div>
            {isAdd?<AddCardDialog />:<div className="addBtn" onClick={addACard}><i className="fa fa-plus fa-xs"></i>Add another card</div>
            }
        </div>
    )
}