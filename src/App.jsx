import React, { useState } from 'react';
import './index.scss';
import Prompt from './components/Prompt';
import Headers from './components/Headers';
import InterfaceCard from './components/InterfaceCard/InterfaceCard'

export default () => {
  const [state, setState] = useState({
    members: [], name: '', title: '', hidePrompt: false,
  });
  const [todos, setTodos] = useState("Card")
  


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
    console.log(todos)
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
      <InterfaceCard todos={todos} setTodos={setTodos} />
    </div>
  );
};
