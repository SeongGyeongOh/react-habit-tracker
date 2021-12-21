import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrese(habit)
  }

  handleDecrement = (habit) => {
    this.props.onDecrese(habit)
  }

  handleDelete = (habit) => {
    this.props.onDelete(habit)
  }

  render() {
    const { habits, onIncrese, onDecrese, onDelete } = this.props

    return (
      <ul>
        {
          habits.map( habit => (
            <Habit 
              habit={habit}
              key={habit.id}
              onIncrement={onIncrese}
              onDecrement={onDecrese}
              onDelete={onDelete}
            />
          ))
        }
      </ul>
    );
  }
}

export default Habits;