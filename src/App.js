import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos.js';
import CreateTodo from './CreateTodo.js';

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
  editTodo(e){
    this.state.todos.forEach((todo)=>{
      if(todo.task == e.target.defaultValue){
         todo.task = e.target.value
          this.setState(this.state)
      }
    })
   
  }

  saveTodo(todo){ 
  //form data is data sending to the server(usually it's json)
  //box for formData
    let formData = new FormData();
  //this is putting data into the box
    formData.set('task', todo.task);
  //sending data through http request to server
    fetch(`${todoAPI}/${todo.id}`,{
      method: "PUT",
      body: formData
    })
    //every time you do this.setState() react knows to do the render function
    //null=stop displaying the edit form        
    this.setState({editingTodo: null})
  }

  editClicked(todo){
    this.setState({editingTodo: todo})
  }

  render() {
    return (
      <div className="App">
        
          <h1>Stephens Todolist</h1>
            <ul>
             <Todos 
              remove={this.deleteItem.bind(this)}
              todos={this.state.todos} 
              edit={this.editTodo.bind(this)}
              editingTodo={this.state.editingTodo}
              editClicked={this.editClicked.bind(this)}
              save={this.saveTodo.bind(this)}/>
            </ul>
            
            <CreateTodo createTodo={this.createTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
