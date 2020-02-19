import React, { useState } from 'react';
import './index.scss';
import Prompt from './components/Prompt';
import Headers from './components/Headers';

export default () => {
  const [state, setState] = useState({
    members: [], name: '', title: '', hidePrompt: false,
  });

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

  return (
    <div className="app">
      <div className="screen" style={{ opacity: state.hidePrompt ? '0' : '1', zIndex: state.hidePrompt ? '-1' : '1' }} />
      {!state.hidePrompt
          && (
          <Prompt
            name={state.name}
            title={state.title}
            addInfo={handleAddInfo}
            promptSubmit={handlePromptSubmit}
          />
          )}
      <Headers
        members={state.members}
        name={state.name}
        title={state.title}
        submitted={state.hidePrompt}
        changeName={handleAddInfo}
        addMember={handlePromptSubmit}
      />
    </div>
  );
};
