import React, { Component } from 'react';
import EditTodo from './EditTodo.js'
class Todos extends Component{
	constructor(props){
		super(props)
		this.state={
      		todos:[]
    	}
	}

	render(){
		const todos = this.props.todos.map((todo, i) => {
      		let todoHtml 
      		if(todo != this.props.editingTodo){
      			todoHtml = <li>
      				{todo.task} 
	      			<button onClick={()=>{
	                	this.props.remove(todo)
	                }}>delete</button>
	                <button onClick={()=>{ this.props.editClicked(todo) }}>Edit</button>
               </li>
      		}else{
      			todoHtml = <EditTodo edit={this.props.edit} todo={todo} save={this.props.save}/>
      		}
      		return <div key={i}>
                {todoHtml}

                
              </div>
    	})

		return(
			<div>
				<ul>
					{todos}
				</ul>
			</div>
		)
	}
}

export default Todos;