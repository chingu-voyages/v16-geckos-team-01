import React,{useState} from 'react'
import Title from './componentsOfCard/Title'
import Item from './componentsOfCard/Item'
import AddBtn from './componentsOfCard/AddBtn'
export default ()=>{
  const [todos, setTodos] = useState("Card")

  console.log(todos)
  return(
    <div className="card">
        <Title
          todos={todos}
          setTodos={text => setTodos(text)}
        />
        <Item />
        <AddBtn />
      </div>
  )
}