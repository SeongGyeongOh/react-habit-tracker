import React, { Component } from 'react';
import Habit from './habit';
import HabitInputForm from './habitInputForm';

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

  handleAdd = name => {
    this.props.onAdd(name)
  }

  render() {
    console.log('habits')
    const { habits, onIncrese, onDecrese, onDelete } = this.props

    return (
      <>
        <HabitInputForm
          onAdd={this.handleAdd}
        />
        <ul>
          {
            habits.map( habit => (
              <Habit   
                habit={habit}
                key={habit.id}
                // PureComponent의 ShallowComparison을 통과하기 위해 count 값을 따로 오브젝트로 떼서 전달(불편!!)
                // count={habit.count}
                count={habit.count}
                onIncrement={onIncrese}
                onDecrement={onDecrese}
                onDelete={onDelete}
              />
            ))
          }
        </ul>
        <button className="reset" onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;