import React,{useState} from 'react'
import Title from './Title/Title'

export default ()=>{
  const [todos, setTodos] = useState("Please")

  console.log(todos)
  return(
    <div>
     <h1>Here is main plate</h1>
        <Title
          todos={todos}
          setTodos={text => setTodos(text)}
        />
    
   
      </div>
  )
}