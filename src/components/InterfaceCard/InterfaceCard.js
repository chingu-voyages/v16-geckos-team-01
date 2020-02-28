import React,{useState} from 'react'
import Title from './componentsOfInterfaceCard/Title'
import Item from './componentsOfInterfaceCard/Item'
import AddAnotherCard from './componentsOfInterfaceCard/AddAnotherCard'

export default ({todos, setTodos})=>{
  
  const [item, setItem]=useState([])
  
  const getItem=(it)=>{
      setItem([...item,it])     
  }

  const displayItem=()=>{
    return item.map(i=> <Item key={i.id} cardName={i.cardName} id={i.id}/>) 
  }

console.log(item)
  return(
    <div className="interfaceCard">
        <Title
          todos={todos}
          setTodos={text=>setTodos(text)}
        />
        {displayItem()}
        
        <AddAnotherCard getItem={getItem}/>
      </div>
  )
}