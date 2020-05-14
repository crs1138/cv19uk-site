import React from 'react';
import Timeline from './Timeline/Timeline';
import { useEvents } from './API/Fetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-duotone-svg-icons'
import styles from './App.module.scss';

function App() {
  const [events, loading] = useEvents();
  return (
    <div className={styles.App}>
      <div className={styles.container}>

        { loading ? (
          // @todo Add spinner
          <div className={styles.loading}>
              <h2>Loading data…</h2>
              <FontAwesomeIcon icon={ faSpinner } size='4x' fixedWidth pulse />
              <p>Thank you for exercising your patience…</p>
          </div>
        ) : (
          <Timeline events={events} />
        ) }
      </div>
    </div>
  );
}

export default App;
