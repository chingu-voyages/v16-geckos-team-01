import React, { useState } from 'react';
import './index.scss';
import Prompt from './components/Prompt';
import Headers from './components/Headers';
import InterfaceCard from './components/InterfaceCard/InterfaceCard'
import AddAnotherList from './components/AddAnotherList'
import { v4 as uuidv4 } from "uuid";


export default () => {
  const [state, setState] = useState({
    members: [], name: '', title: '', hidePrompt: false,
  });

  // const sampleCard = [
  //   {
  //     id: 1,
  //     cardTitle: "someTitle",
  //     todos: [{ id:1, todoTitle: "someTitle" }],
  //   },
  // ];
  
// const [todos, setTodos] = useState([]);
const [cards, setCards] = useState([]);

const addNewCard = (cardTitle) => {
  const newCard = { id: uuidv4(), cardTitle, todos: [] };
  const newState = [...cards, newCard];
  setCards(newState);
};

const addNewTodo = (cardId, todoTitle) => {
  const newTodo = { id: uuidv4(), todoTitle };
  const stateCopy = [...cards];
  stateCopy.forEach((card) => {
    if (card.id === cardId) {
      card.todos.push(newTodo);
    }
  });
  setCards(stateCopy);
};


// BEING REPLACED BY UPDATECARD BELOW   
  // const handleTitleChange=(newTitle, passedId)=>{
  //    const newTodos=[...todos]
  //    newTodos.forEach(todo=>{
  //     if(todo.id===passedId){
  //       todo.listName=newTitle;
  //     }
  //    })
  //    setTodos(newTodos)
  // }

const updateCard = (cardId, newCardTitle) => {
  const stateCopy = [...cards];
  stateCopy.forEach((card) => {
    if (card.id === cardId) {
      card.cardTitle = newCardTitle;
    }
  });
  setCards(stateCopy);
};

const updateTodo = (cardId, todoId, newTodoTitle) => {
  const stateCopy = [...cards];
  stateCopy.forEach((card) => {
    if (card.id === cardId) {
      card.todos.forEach((todo) => {
        if (todo.id === todoId) {
          todo.todoTitle = newTodoTitle;
        }
      });
    }
  });
  setCards(stateCopy);
};

 
   
  const archiveList=(id)=>{
    setCards(cards.filter(t=>t.id!==id))
  }
 
  // const getListInfo=(list)=>{
  //   setTodos([...todos, list])
  // } 

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
    
    


    const controls = {
      addNewCard,
      addNewTodo,
      updateCard,
      updateTodo,
    };
  console.log("cards: ",cards)
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
          {cards.map((card)=>{
           return <InterfaceCard 
                      archiveList={archiveList}
                      key={card.id}
                      card={card}
                      handleTitleChange={updateCard}
                      members={state.members}
                      controls={controls}
                      />
                    
          })}
        
        <AddAnotherList addNewCard={controls.addNewCard} />
        </div>
    </div>
  );
};
