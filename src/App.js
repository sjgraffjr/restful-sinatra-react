import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos.js';
import CreateTodo from './CreateTodo.js';
import Edit from './Edit.js'
const todoAPI = 'http://localhost:9292/todos';

class App extends Component {
  constructor(){
    super()

    this.state={
      todos:[],
      
    }
  }
  componentWillMount(){
    fetch(todoAPI).then((res)=>{
      res.json().then((todos)=>{
        this.setState({todos: todos})
      })
    })
    
  }

  deleteItem(todo){
    console.log(todo.id,'this is todo id')
    fetch(todoAPI + '/' + todo.id, {method: "DELETE"})
    const index = this.state.todos.indexOf(todo)
    this.state.todos.splice(index, 1)
    this.setState(this.state)
  }

  createTodo(task){
    
    let formData = new FormData();
    formData.set('task', task);
    
    fetch(todoAPI,{
          method: "POST",
          body: formData
      })
    .then((res)=>{
      res.json().then((todo)=>{
        this.state.todos.push(todo)
        this.setState(this.state)

      })
    })

    
  }

 

  render() {
    return (
      <div className="App">
        
          <h1>Stephens Todolist</h1>
            <ul>
             <Todos 
              remove={this.deleteItem.bind(this)}
              todos={this.state.todos} />
            </ul>
            
            <CreateTodo createTodo={this.createTodo.bind(this)}/>
        

      </div>
    );
  }
}

export default App;
