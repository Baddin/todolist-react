import React, { Component } from 'react';
import './TodoInput.css'

class TodoInput extends Component {
	
	constructor() {
		super()
		this.state = {
			newTask:{}
		}
	}
 
	onClick(){
		if (this.textInput.value){
  			this.setState({newTask:{
  				//id: add it later
  				title: this.textInput.value
  			}}, () => {
  				this.props.addTask(this.state.newTask)
  			})
  		}
  	}

  render() {


  return (
   <div className='input-group'>
          <input  ref={input => this.textInput = input} className='form-control input-todo' type="text" placeholder="type a new task here"></input>
           <span className='input-group-btn'>
          	<button onClick= {this.onClick.bind(this)} className='btn btn-default input-todo'>Add</button>
          </span>
        </div>
  	)
  }
}

export default TodoInput






