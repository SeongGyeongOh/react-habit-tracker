import React, { Component } from 'react';

class Habit extends Component {
  // state 멤버변수 - object
  // state = {
  //   count: 0,
  // }

  // 멤버변수
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit)
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.habit)
  }

  render() {
    const { name, count } = this.props.habit
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button className="habit-button habit-increse" onClick={this.handleIncrement}>
          <i className="far fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrese" onClick={this.handleDecrement}>
          <i className="far fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="far fa-trash-alt"></i>
        </button>
      </li>
    )
  }
}

export default Habit; 