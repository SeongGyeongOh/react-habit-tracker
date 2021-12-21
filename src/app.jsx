import React, { Component } from 'react';
import './app.css';
import Habit from './components/habit';
import Habits from './components/habits';
import NavBar from './components/navbar';

class App extends Component{
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0}
    ]
  }

  handleIncrement = (habit) => {
    const newHabits = [...this.state.habits]
    const index = newHabits.indexOf(habit)
    newHabits[index].count++
    this.setState({
      habits: newHabits
    })
  }

  handleDecrement = (habit) => {
    const newHabits = [...this.state.habits]
    const index = newHabits.indexOf(habit)
    const count = newHabits[index].count - 1
    newHabits[index].count = count < 0 ? 0 : count

    this.setState({
      habits: newHabits
    })
  }

  handleDelete = (habit) => {
    const newHabits = this.state.habits.filter( item => (
      item.id !== habit.id
    ))

    this.setState({
      habits: newHabits
    })
  }

  render() {
    return (
      <>
        <NavBar
          count={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits 
          habits={this.state.habits}
          onIncrese={this.handleIncrement}
          onDecrese={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
