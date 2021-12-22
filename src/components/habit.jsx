import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  // state 멤버변수 - object
  // state = {
  //   count: 0,
  // }

  componentDidMount() {
    // 컴포넌트가 화면에 보여질 때
    console.log(`componentDodMount: ${this.props.habit.name}`)
  }

  componentWillUnmount() {
    // 컴포넌트가 화면에서 사라질 때
    console.log(`componentWillUnmount: ${this.props.habit.name}`)
  }

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
    console.log(`habit: ${this.props.habit.name}`)
    const { name, count } = this.props.habit
    // const { count } = this.props
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