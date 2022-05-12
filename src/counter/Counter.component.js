import React from 'react';

import styles from './Counter.module.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className={styles.root}>
        <button className="increment" onClick={this.increment}>
          Increment
        </button>
        <div className={styles.count} aria-label="count">
          {this.state.count}
        </div>
        <button className="decrement" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
