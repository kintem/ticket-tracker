import React, {useState} from 'react';
import styles from './Counter.module.scss';
import Button from '../Button';

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const { member } = props;

  return (
    <section className={styles.counter}>
      <div className={styles.buttonContainer} onClick={()=> {
        setCount(count !== 0 ? count - 1 : 0);
        member.ticketCount = count;
        }}>
        <Button buttonText="-" />
      </div>
      <p>{count}</p>
      <div className={styles.buttonContainer} onClick={()=> {
        setCount(count + 1)
        member.ticketCount = count}
        }>
        <Button buttonText="+" />
      </div>
    </section>
  )
}

export default Counter;