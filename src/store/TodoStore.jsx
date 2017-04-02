import {EventEmitter} from 'events';

class TodoStore extends EventEmitter {
  constructor(props) {
  	super(props);
  	this.state = {
      todos: [
  	    {
          id: 1,
          status: true,
          text: "1st task",
  	    },
  	    { 
  	  	  id: 2,
  	  	  status: false,
          text: "2nd task",
          
  	    }
  	  ]
  	}
  	this.createTodo = this.createTodo.bind(this);  
    this.getAll = this.getAll.bind(this);
  }

  createTodo(text) {
  	const id = Date.now();
    this.state.todos.push({
      id,
      status: false,
      text,
    });

    this.emit("change");
  } 

  getAll() {
  	console.log("getting the newly added todos");
  	return this.state.todos;
  }

}

const todoStore = new TodoStore;

window.todoStore = todoStore;

export default todoStore;