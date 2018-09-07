import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import mockTasks from './tasks'

class App extends Component {
  constructor(){
    super()
    this.state = {tasks : []}
  }

  componentWillMount(){
    this.setState({tasks:mockTasks})
  }

  handleAddTask(task) {
    let tasks = this.state.tasks;
    tasks.push(task)
    this.setState({tasks: tasks})
  }

  handleDeleteTask(id){
    let tasks = this.state.tasks;
    let index = tasks.findIndex(x => x.id === id)
    tasks.splice(index, 1)
    this.setState({tasks: tasks})
  }

  render() {
    return (
      <div className="App container">
        <TodoInput addTask = {this.handleAddTask.bind(this)} />
        <hr/>
        <TodoList tasklist = {this.state.tasks} onDelete={this.handleDeleteTask.bind(this)}/>
      </div>
    );
  }
}




export default App;
