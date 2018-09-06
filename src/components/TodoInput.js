import React, { Component } from 'react';
import './TodoInput.css'

class TodoInput extends Component {
  render() {

  return (
   <div className='input-group'>
          <input  className='form-control input-todo' type="text" placeholder="type a new task here"></input>
           <span className='input-group-btn'>
          	<button className='btn btn-default input-todo'>Add</button>
          </span>
        </div>
  	)
  }
}

export default TodoInput






