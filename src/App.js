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
  render() {
    return (
      <div className="App">
        <TodoInput addTask = {this.handleAddTask.bind(this)}/>
        <TodoList tasklist = {this.state.tasks}/>
      </div>
    );
  }
}




export default App;
