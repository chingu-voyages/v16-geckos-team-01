import React,{useState} from 'react'
import Title from './componentsOfInterfaceCard/Title'
import Item from './componentsOfInterfaceCard/Item'
import AddBtn from './componentsOfInterfaceCard/AddBtn'
export default ({todos, setTodos})=>{
  
  const [item, setItem]=useState([])
  
  const getItem=(it)=>{
      setItem([...item,it])     
  }

  const displayItem=()=>{
    return item.map(i=> <Item i={i} />) 
  }
  console.log(item)

  return(
    <div className="interfaceCard">
        <Title
          todos={todos}
          setTodos={text=>setTodos(text)}
        />
        {displayItem()}
        
        <AddBtn getItem={getItem}/>
      </div>
  )
}