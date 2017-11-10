
import React, { Component } from 'react';

class CreateTodo extends Component{
	constructor(props){
		super(props)
 		this.state = {task:''}
	}

	onSubmit(e){
		e.preventDefault()
		this.props.createTodo(this.state.task)
		this.setState({task:''})
	}

	taskChange=(e)=>{
		this.setState({task:e.target.value})
	}

	render(){
			  
	
		return(
		 <form onSubmit={this.onSubmit.bind(this)}>
              <input 
              placeholder="New Todo" 
              onChange={this.taskChange.bind(this)}
              value={this.state.task}/>
         </form>
		)
	}
}
export default CreateTodo;