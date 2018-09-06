import React, { Component } from 'react';
import './TodoList.css'
import TodoItem from './TodoItem.js'

class TodoList extends Component {
  render() {

  return (
  		<div className="todo-list">
  			<ul className="list-group">
  				<TodoItem item="test item"/>
  			</ul>
  		</div>
  	)
  }
}

export default TodoList
