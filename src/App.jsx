import React, { Component } from 'react';
import './index.scss';
import Prompt from './components/Prompt';
import Headers from './components/Headers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      name: '',
      title: '',
      hidePrompt: false,
    };
  }

  handleAddName = (e) => {
    const input = e.target.value;
    this.setState({
      name: !input.trim() ? '' : input,
    });
  }

  handleAddTitle = (e) => {
    const input = e.target.value;
    this.setState({
      title: !input.trim() ? '' : input,
    });
  }

  handlePromptSubmit = (e) => {
    const {members, name} = this.state;
    e.preventDefault();
    this.setState({
      members: [...members, name],
      name: '',
      hidePrompt: true,
    });
  }

  render() {
    const { members, name, title, hidePrompt } = this.state;
    return (
      <div className="app">
        <div className="screen" style={{ opacity: hidePrompt ? '0' : '1', zIndex: hidePrompt ? '-1' : '1' }} />
        {!hidePrompt
          && (
          <Prompt
            name={name}
            title={title}
            addName={this.handleAddName}
            addTitle={this.handleAddTitle}
            promptSubmit={this.handlePromptSubmit}
          />
          )}
        <Headers 
            members={members} 
            name={name} 
            title={title} 
            submitted={hidePrompt} 
            changeName={this.handleAddName} 
            addMember={this.handlePromptSubmit}
        />
      </div>
    );
  }
}

export default App;
