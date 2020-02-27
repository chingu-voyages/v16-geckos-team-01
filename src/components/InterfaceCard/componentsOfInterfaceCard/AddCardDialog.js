import React,{useState} from 'react'

export default ({getItem,setIsAdd})=>{
    const [cardContent, setCardContent]=useState("")
    const AddCard=(e)=>{
        e.preventDefault()
        getItem(cardContent)
        setIsAdd(false)
 
    }
    return(
        <div className="AddCardDialog"> 
            <form onSubmit={e=>AddCard(e)} >
                <input onChange={e=>setCardContent(e.target.value)} placeholder="Enter a title for this card..."></input> 
                <button>Add Card</button><i className="fas fa-times"></i> 
            </form>
        </div>    
       
    )
}