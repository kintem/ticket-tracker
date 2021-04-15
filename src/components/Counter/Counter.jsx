import React from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
  const count = 0;

  return (
    <div className={styles.counter}>
      <p>{count}</p>
      <button> + </button>
      <button> - </button>
    </div>
  )
}

export default Counter;