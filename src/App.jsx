import React, { useState } from 'react';
import './index.scss';
import Prompt from './components/Prompt';


export default () => {
  const [state, setState] = useState({ name: '', title: '', hidePrompt: false });

  const handleAddName = (e) => {
    const input = e.target.value;
    setState({ ...state, name: !input.trim() ? '' : input });
  };

  const handleAddTitle = (e) => {
    const input = e.target.value;
    setState({ ...state, title: !input.trim() ? '' : input });
  };

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, hidePrompt: true });
  };
  return (
    <div className="app">
      <div className="screen" style={{ opacity: state.hidePrompt ? '0' : '1' }} />
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
    </div>
  );
};
