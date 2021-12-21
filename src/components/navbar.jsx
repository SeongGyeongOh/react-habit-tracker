import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    const { count } = this.props
    return (
      <nav className='nav-bar'>
        <span className='nav-title'>Habit Tracker</span>
        <span className='nav-count'> {count}</span>
      </nav>
    );
  }
}

NavBar.defaultProps = {
  count: 0
}

export default NavBar