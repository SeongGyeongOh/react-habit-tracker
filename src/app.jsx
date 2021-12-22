import React, { Component } from 'react';
import './app.css';
import Habit from './components/habit';
import HabitInputForm from './components/habitInputForm';
import Habits from './components/habits';
import NavBar from './components/navbar';

class App extends Component{
  id = 4
  state = {
    input: '',
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0}
    ]
  }

  handleIncrement = (habit) => {
    // const newHabits = [...this.state.habits]
    // const index = newHabits.indexOf(habit)
    // newHabits[index].count++

    // PureComponent의 ShallowComparison을 통과하기 위해..
    const newHabits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return {...habit, count: habit.count + 1}
      } else {
        return item
      }
    })
    this.setState({
      habits: newHabits
    })
  }

  handleDecrement = (habit) => {
    // const newHabits = [...this.state.habits]
    // const index = newHabits.indexOf(habit)
    // const count = newHabits[index].count - 1
    // newHabits[index].count = count < 0 ? 0 : count


    const newHabits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1
        return {...habit, count: count < 0 ? 0 : count }
      } else {
        return item
      }
    })
  
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

  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}]
    this.setState({
      habits
    })
  }

  handleReset = () => {
    const habits = this.state.habits.map( habit => {
      habit.count = 0
      if (habit.count !== 0) {
        return {...habit, count: 0}
      } 
      return habit
    })

    this.setState({habits})
  }

  render() {
    console.log('app')
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
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
