import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmount`);
  }

  componentDidUpdate() {
    console.log(`habit: ${this.props.habit.name}, ${this.props.habit.count} updated`);
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  }
  
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  }

  render() {
    const { name, count } = this.props.habit;
    console.log('habit:',name);
    return (
      <li className='habit-box'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <div className='button-box'>
          <button className='habit-button habit-increase' onClick={this.handleIncrement}>
            <i className='fas fa-plus-square'></i>
          </button>
          <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
            <i className='fas fa-minus-square'></i>
          </button>
          <button className='habit-button habit-delete' onClick={this.handleDelete}>
            <i className='fas fa-trash'></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Habit;
