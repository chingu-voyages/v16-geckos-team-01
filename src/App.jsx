import React,{useState}from 'react';
import './index.scss';
import Prompt from "./components/Prompt";


  export default()=>{
  const [state, setState]=useState({name:"",title:"",hidePrompt:false})
// class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     name: "",
  //     title: "",
  //     hidePrompt: false,
  //   }
  // }
  const handleAddName = (e) => {
    const input = e.target.value;
    // this.setState({
    //   name: !input.trim() ? "" : input,
    // })
    setState({...state, name:!input.trim()?"":input})
  }

  const handleAddTitle = (e) => {
    const input = e.target.value;
    // this.setState({
    //   title: !input.trim() ? "" : input,
    // })
    setState({...state, title:!input.trim()?"":input})
  }

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    // this.setState({
    //   hidePrompt: true,
    // })
    setState({...state,hidePrompt:true})
  }
  // render() {
    return (
      <div className="app">
        <div className="screen" style={{opacity: state.hidePrompt ? "0" : "1"}}></div>
        {!state.hidePrompt && <Prompt name={state.name} title={state.title} addName={e=>handleAddName(e)} addTitle={e=>handleAddTitle(e)} promptSubmit={e=>handlePromptSubmit(e)}/>}
      </div>
    );
  // }
}

// export default App;
