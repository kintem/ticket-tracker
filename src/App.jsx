import React from "react";
import Card from './components/Card';
import styles from './App.module.scss';

import teamData from './data/team';

const App = () => {
  const teamCards = teamData.map(member=>{
    return <Card member={member} />
  })

  return (
    <div className={styles.content}>
      <h1>Team Ticket Tracker</h1>
      <hr/>
      <section className={styles.teamContainer}>
        {teamCards}
      </section>
    </div>
  );
};

export default App;