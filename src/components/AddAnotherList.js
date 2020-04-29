import React,{useState} from 'react'
import AddListDialog from './AddListDialog'
 
export default ({ addNewCard})=>{
    const [addAList, setAddAList]=useState(false)
    
    const handleAddAList=()=>{
        setAddAList(!addAList)
    }
   
    return(
         <div>
          {addAList?<AddListDialog 
                        setAddAList={setAddAList} 
                      
                        addNewCard={addNewCard}
                    />:<div className="addAnotherList" onClick={handleAddAList} >
                        <i className="fa fa-plus fa-xs"></i>Add another list</div>}
        
        </div>
    )
}