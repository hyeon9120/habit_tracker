import React, { Component } from 'react';
import Habit from './habit';
import InputBox from './inputBox';

class Habits extends Component {
  
  handleIncrement = habit => {
    this.props.onIncrement(habit);
  }

  handleDecrement = habit => {
    this.props.onDecrement(habit);
  }
  
  handleDelete = habit => {
    this.props.onDelete(habit);
  }

  handleAdd = data => {
    this.props.onAdd(data);
  }

  render() {
    return (
      <>
        <InputBox onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit} 
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className='habitsRest' onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;