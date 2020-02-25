import React from 'react'
import Title from './componentsOfInterfaceCard/Title'
import Item from './componentsOfInterfaceCard/Item'
import AddBtn from './componentsOfInterfaceCard/AddBtn'
export default ({todos, setTodos})=>{
  

 
  return(
    <div className="card">
        <Title
          todos={todos}
          setTodos={text=>setTodos(text)}
        />
        <Item />
        <AddBtn />
      </div>
  )
}