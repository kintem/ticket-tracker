import React from "react";
import Card from './components/Card';
import styles from './App.module.scss';

import teamData from './data/team';


const App = () => {
  const teamCards = teamData.map(member=>{
    return <Card member={member} />
  })

  return (
    <>
      <h1>Team Ticket Tracker</h1>
      <section className={styles.teamContainer}>
        {teamCards}
      </section>
    </>
  );
};

export default App;