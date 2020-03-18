import React,{useState} from 'react'
import Title from './componentsOfInterfaceCard/Title'
import Item from './componentsOfInterfaceCard/Item'
import AddAnotherCard from './componentsOfInterfaceCard/AddAnotherCard'

export default ({titleName, handleTitleChange, titleId,archiveList,members})=>{
  
  const [item, setItem]=useState([])
  
  const getItem=(it)=>{
      setItem([...item,it])     
  }

  const displayItem=()=>{
    return item.map(i=> <Item key={i.id} cardName={i.cardName} id={i.id} titleName={titleName} members={members}/>) 
  }

 console.log(titleName)
  return(
    <div className="interfaceCard">
        <Title
          titleName={titleName}
          titleId={titleId}
          handleTitleChange={handleTitleChange}
          archiveList={archiveList}
        />
       
        {displayItem()} 
        
         <AddAnotherCard getItem={getItem}/>
      </div>
  )
}