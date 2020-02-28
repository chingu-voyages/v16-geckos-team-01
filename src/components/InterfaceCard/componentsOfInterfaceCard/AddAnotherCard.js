import React,{useState} from 'react'
import AddCardDialog from './AddCardDialog'
export default ({getItem})=>{
    const [isAdd,setIsAdd]=useState(false)
    const addACard=()=>{
        setIsAdd(!isAdd)
    }
    return(
        <div>
            {isAdd?<AddCardDialog getItem={getItem} setIsAdd={setIsAdd}/>:<div className="addAnotherCard" onClick={addACard}><i className="fa fa-plus fa-xs"></i>Add another card</div>
            }
        </div>
    )
}