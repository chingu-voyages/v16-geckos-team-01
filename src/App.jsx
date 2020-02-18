import React, { useState } from 'react';
import './index.scss';
import Prompt from './components/Prompt';
import Headers from './components/Headers';

export default () => {
  const [state, setState] = useState({
    members: [], name: '', title: '', hidePrompt: false,
  });

  const handleAddName = (e) => {
    const input = e.target.value;
    setState({
      ...state, name: !input.trim() ? '' : input,
    });
  };

  const handleAddTitle = (e) => {
    const input = e.target.value;
    setState({
      ...state, title: !input.trim() ? '' : input,
    });
  };

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

  return (
    <div className="app">
      <div className="screen" style={{ opacity: state.hidePrompt ? '0' : '1', zIndex: state.hidePrompt ? '-1' : '1' }} />
      {!state.hidePrompt
          && (
          <Prompt
            name={state.name}
            title={state.title}
            addName={handleAddName}
            addTitle={handleAddTitle}
            promptSubmit={handlePromptSubmit}
          />
          )}
      <Headers
        members={state.members}
        name={state.name}
        title={state.title}
        submitted={state.hidePrompt}
        changeName={handleAddName}
        addMember={handlePromptSubmit}
      />
    </div>
  );
};
