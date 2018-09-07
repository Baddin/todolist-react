import React, { Component } from 'react';


class TodoItem extends Component {
  

  deleteTask(id){
	this.props.onDelete(id)
  }

  render() {

  return (
  		<div className="todo-item">
  			<li className="list-group-item">
  				<div>
	  				{this.props.item}
	  				<span className="float-right">
	  					<button onClick={this.deleteTask.bind(this)} className="btn btn-danger btn-sm">Delete</button>
	  				</span>
  				</div>
  			</li>
  		</div>
  	)
  }
}

export default TodoItem
