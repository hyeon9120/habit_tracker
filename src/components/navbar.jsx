import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav>
        <h1><i className="fas fa-leaf"></i> Habit Tracker</h1>
        <span className="">total : {this.props.allCount}</span>
      </nav>
    );
  }
}

export default Navbar;