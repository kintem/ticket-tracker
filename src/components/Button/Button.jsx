import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  const { buttonText } = props;
  let buttonStyles = "";

  if (buttonText === '+') {
    buttonStyles = `${styles.increase}`;
  }

  if (buttonText === '-') {
    buttonStyles = `${styles.decrease}`;
  }

  return <button className={`${styles.button} ${buttonStyles}`}>{buttonText}</button>
}

export default Button;