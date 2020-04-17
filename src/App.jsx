import React, { useState } from 'react';
import './index.scss';
import Prompt from './components/Prompt';
import Headers from './components/Headers';
import InterfaceCard from './components/InterfaceCard/InterfaceCard'
import AddAnotherList from './components/AddAnotherList'

export default () => {
  const [state, setState] = useState([
    {
      dataName:'loginData', members: [], name: '', title: '', hidePrompt: false,
    }

]);

  

  const [todos, setTodos] = useState([])

 
   
  const archiveList=(id)=>{
    setTodos(todos.filter(t=>t.id!==id))
  }
 
  const getListInfo=(list)=>{
    setTodos([...todos, list])
  } 

  // Add name or title
  const handleAddInfo = (e) => {
    const input = e.target.value;
    setState([{
      ...state[0], [e.target.name]: !input.trim() ? '' : input,
    }]);
  };

  // Submit form to add members
  const handlePromptSubmit = (e) => {
    const { members, name } = state[0];
    e.preventDefault();
    setState([{
      ...state[0],
      members: [...members, name],
      name: '',
      hidePrompt: true,
    }]);
  };

  // Remove a member from the board
  const handleRemoveMember = (e) => {
    const updated = [...state[0].members];
    const toRemove = updated.indexOf(e.target.name);
    setState([{
      ...state[0],
      members: updated.slice(0, toRemove).concat(updated.slice(toRemove + 1, updated.length)),
    }]);
  };

  const screenStyle = { opacity: state[0].hidePrompt ? '0' : '1', zIndex: state[0].hidePrompt ? '-1' : '1' };

  const promptControl = !state[0].hidePrompt
    && (
    <Prompt
      name={state[0].name}
      title={state[0].title}
      addInfo={handleAddInfo}
      promptSubmit={handlePromptSubmit}
    />
    );
    
    
   
    const handleTitleChange=(newTitle, passedId)=>{
       const newTodos=[...todos]
       newTodos.forEach(todo=>{
        if(todo.id===passedId){
          todo.listName=newTitle;
        }
       })

       setTodos(newTodos)
 
    }
    console.log(state)
   console.log("todos: ",todos)
  return (
    <div className="app">
      <div className="screen" style={screenStyle} />
        {promptControl}
        <Headers
          members={state[0].members}
          name={state[0].name}
          title={state[0].title}
          submitted={state[0].hidePrompt}
          changeName={handleAddInfo}
          addMember={handlePromptSubmit}
          removeMember={handleRemoveMember}
        />
        <div className="body">
          {todos.map(t=>{
           return <InterfaceCard 
                      archiveList={archiveList}
                      key={t.id} 
                      titleName={t.listName} 
                      titleId={t.id} 
                      handleTitleChange={handleTitleChange} 
                      members={state[0].members} 
                      />
                    
          })}
        
        <AddAnotherList  getListInfo={getListInfo} />
        </div>
    </div>
  );
};
