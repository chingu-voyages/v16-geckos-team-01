import React, { useState } from 'react';
import './index.scss';
import Prompt from './components/Prompt';
import Headers from './components/Headers';
import InterfaceCard from './components/InterfaceCard/InterfaceCard'
import AddAnotherList from './components/AddAnotherList'

export default () => {
  const [state, setState] = useState({
    members: [], name: '', title: '', hidePrompt: false,
  });
  const [todos, setTodos] = useState([])

   console.log("test")
   
  const archiveList=(id)=>{
    setTodos(todos.filter(t=>t.id!==id))
  }
 
  const getListInfo=(list)=>{
    setTodos([...todos, list])
  } 

  // Add name or title
  const handleAddInfo = (e) => {
    const input = e.target.value;
    setState({
      ...state, [e.target.name]: !input.trim() ? '' : input,
    });
  };

  // Submit form to add members
  const handlePromptSubmit = (e) => {
    const { members, name } = state;
    e.preventDefault();
    setState({
      ...state,
      members: [...members, name],
      name: '',
      hidePrompt: true,
    });
  };

  // Remove a member from the board
  const handleRemoveMember = (e) => {
    const updated = [...state.members];
    const toRemove = updated.indexOf(e.target.name);
    setState({
      ...state,
      members: updated.slice(0, toRemove).concat(updated.slice(toRemove + 1, updated.length)),
    });
  };

  const screenStyle = { opacity: state.hidePrompt ? '0' : '1', zIndex: state.hidePrompt ? '-1' : '1' };

  const promptControl = !state.hidePrompt
    && (
    <Prompt
      name={state.name}
      title={state.title}
      addInfo={handleAddInfo}
      promptSubmit={handlePromptSubmit}
    />
    );
    console.log(todos,"ok")
    
   
    const handleTitleChange=(newTitle, passedId)=>{
       const newTodos=[...todos]
       newTodos.forEach(todo=>{
        if(todo.id===passedId){
          todo.listName=newTitle;
        }
       })

       setTodos(newTodos)
 
    }
   
  return (
    <div className="app">
      <div className="screen" style={screenStyle} />
        {promptControl}
        <Headers
          members={state.members}
          name={state.name}
          title={state.title}
          submitted={state.hidePrompt}
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
                      members={state.members} 
                      />
                    
          })}
        
        <AddAnotherList  getListInfo={getListInfo} />
        </div>
    </div>
  );
};
