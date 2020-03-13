import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default ({getItem,setIsAdd})=>{
    const [cardContent, setCardContent]=useState("")
    const AddCard=(e)=>{
        e.preventDefault()
        cardContent===""?setIsAdd(true): getItem({...cardContent,id:uuidv4()})
        setIsAdd(false)
 
    }
    const CancelCard=()=>{
        setIsAdd(false)
    }

    console.log(cardContent)
    return(
        <div className="addCardDialog"> 
            <form onSubmit={e=>AddCard(e)} >
                <textarea rows = "3" cols = "29" onChange={e=>setCardContent({...cardContent,cardName:e.target.value})} placeholder="Enter a title for this card..."></textarea> 
                <br/>
                <button className="addBtn" >Add Card</button>
                <button className="cancelBtn" type="button" onClick={CancelCard}  ><i className="fas fa-times fa-lg"></i></button>
                <button className="ellipsis" type="button" ><i className="fas fa-ellipsis-h fa-lg"></i></button>
            </form>
           
           
        </div>    
       
    )
}