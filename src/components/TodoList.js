import React, { Component } from 'react';
import './TodoList.css'
import TodoItem from './TodoItem.js'


class TodoList extends Component {
	deleteTask(id){
		this.props.onDelete(id)
	}
  render() {
  	const listItems = this.props.tasklist.map(task => {
  		
  		return <TodoItem key={task.id} item={task.title} onDelete={this.deleteTask.bind(this)}/>
  	})
  return (
  		<div className="todo-list">
  			<ul className="list-group">
  				{listItems}
  			</ul>
  		</div>
  	)
  }
}

export default TodoList
