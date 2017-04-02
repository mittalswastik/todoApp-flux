import React, { Component } from 'react';
import GeminiScrollbar from 'react-gemini-scrollbar';
import Todo from './Todo.jsx';
import TodoStore from '../store/TodoStore.jsx';

class Start extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  todos: TodoStore.getAll(),
  	} 
  }	

  componentWillMount() {
  	console.log("this is the end");
  	TodoStore.on("change", () => {
  	  this.setState({
  	  	todos: TodoStore.getAll()
  	  })	
  	});
  }

  render() {
    
    const todo = this.state.todos;
    console.log("just chill chill");
    console.log(todo[0].id , ...todo);
  	
  	const Todocomponents = todo.map((todo) => {
      return <Todo key={todo.id}{...todo}/>;     // key is neccessary because each child in an array should have a unique key property
  	})
  	
  	return (
  	  <div>
  	    <p> is it working just checking </p>
  	    <GeminiScrollbar>
  	      <h1>Todos</h1>
  	      <ul>{Todocomponents}</ul>
   	    </GeminiScrollbar>
   	  </div>  	
  	);
  }  
}

export default Start;