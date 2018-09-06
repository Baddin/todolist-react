import React, { Component } from 'react';


class TodoItem extends Component {
  render() {

  return (
  		<div className="todo-item">
  			<li className="list-group-item">{this.props.item}</li>
  		</div>
  	)
  }
}

export default TodoItem
