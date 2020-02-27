import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default ({getItem,setIsAdd})=>{
    const [cardContent, setCardContent]=useState("")
    const AddCard=(e)=>{
        e.preventDefault()
        cardContent===""?setIsAdd(true): getItem({...cardContent,id:uuidv4()})
        setIsAdd(false)
 
    }
    return(
        <div className="AddCardDialog"> 
            <form onSubmit={e=>AddCard(e)} >
                <textarea rows = "3" cols = "29" onChange={e=>setCardContent({...cardContent,cardName:e.target.value})} placeholder="Enter a title for this card..."></textarea> 
                <br/>
                <button>Add Card</button>
                <i className="fas fa-times"></i> 
            </form>
        </div>    
       
    )
}