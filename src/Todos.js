import React, { Component } from 'react';

class Todos extends Component{
	constructor(props){
		super(props)
		this.state={
      		todos:[]
    	}
	}

	render(){
		const todos = this.props.todos.map((todo, i) => {
      		return <div key={i}>
                <li>{todo.task}</li>
                <button onClick={()=>{
                	this.props.remove(todo)
                }}>delete</button>
                <button>edit</button>
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