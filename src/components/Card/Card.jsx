import React from 'react';
import Counter from '../Counter';
import styles from './Card.module.scss';

const Card = (props) => {
  const { name, role } = props.member;
  return (
    <article className={styles.card}>
      <h3>{name}</h3>
      <p>{role}</p>
      <Counter member={props.member}/>
    </article>
  )
}

export default Card;