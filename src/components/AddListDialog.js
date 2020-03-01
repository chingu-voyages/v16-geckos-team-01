import React,{useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default ({setTodos,setAddAList})=>{
    const [listTitle, setListTitle]=useState("")

    const handleChange = e => {
        setListTitle(e.target.value);
      };

  

    const AddList=(e)=>{
 
         listTitle===""?setAddAList(true): setTodos({...listTitle,id:uuidv4()})
         
        //  setAddAList(false)
 
    }
    const CancelList=()=>{
        // setAddAList(false)
    }
    const inputRef=useRef();
    return(
        <div className="addListDialog"> 
            <form onSubmit={e=>AddList(e)} >
            <input
                
                ref={inputRef}
                type="text"
                value={listTitle}
                name="listTitle"
                placeholder="Enter list title..."
                onFocus
                onChange={e => handleChange(e)}
                onKeyPress={e=>{
                    if(e.key==="Enter"){AddList(e);inputRef.current.blur()}}}
            />
            <br/>
                <button className="addBtn" >Add Card</button>
                <button className="cancelBtn" type="button" onClick={CancelList}  ><i className="fas fa-times fa-lg"></i></button>
            </form>
           
           
        </div>    
       
    )
}