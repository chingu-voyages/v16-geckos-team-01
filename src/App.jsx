import React, {Component} from 'react';
import './index.scss';
import Prompt from "./components/Prompt";

class App extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }
  render() {
    return (
      <div className="App">
        <Prompt submit={this.handleSubmit}/>
        <h1 className="page-header">Trello Clone</h1>
      </div>
    );
  }
}

export default App;
