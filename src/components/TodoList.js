import React, { Component } from 'react';
import './TodoList.css'
import TodoItem from './TodoItem.js'


class TodoList extends Component {
  render() {
  	const listItems = this.props.tasklist.map(task => {
  		
  		return <TodoItem key={task.id} item={task.title}/>
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
