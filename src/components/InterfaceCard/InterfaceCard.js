import React,{useState} from 'react'
import Title from './componentsOfInterfaceCard/Title'
import Item from './componentsOfInterfaceCard/Item'
import AddAnotherCard from './componentsOfInterfaceCard/AddAnotherCard'

export default ({controls,card,titleName, handleTitleChange, titleId,archiveList,members})=>{
  
  const [item, setItem]=useState([])   
  
  const getItem=(it)=>{
      setItem([...item,it])     
  }

  const displayItem=()=>{
    return card.todos.map(todo=> <Item key={todo.id} cardName={todo.todoTitle} id={todo.id} titleName={card.cardTitle} members={members}/>) 
  }

 console.log("card id: ", card.id, "card title:", card.cardTitle)
  return(
    <div className="interfaceCard">
        <Title
          titleName={card.cardTitle}
          cardId={card.id}
          handleTitleChange={handleTitleChange}
          archiveList={archiveList}
        />
       
        {displayItem()} 
        
         <AddAnotherCard 
            getItem={getItem} 
            addNewTodo={controls.addNewTodo} 
            cardId={card.id}    
         />
      </div>
  )
}