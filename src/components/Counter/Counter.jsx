import React, {useState} from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <p>{count}</p>
      <button onClick={()=> setCount(count + 1)}> + </button>
      <button onClick={()=> {
        return count !== 0 ? setCount(count - 1) : count
        }}> - </button>
    </div>
  )
}

export default Counter;