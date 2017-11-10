import React, { Component } from 'react';

class EditTodo extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				 <input value={this.props.todo.task} onChange={this.props.edit}/>
				 <button onClick={() => { this.props.save(this.props.todo) }}>Save</button>
			</div>
		)

	}
}


/

export default EditTodo;