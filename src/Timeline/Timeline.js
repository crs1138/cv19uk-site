import React from 'react';
import TimeUnitList from '../TimelineUnitList/TimeUnitList';
import styles from './Timeline.module.scss';

function Timeline({ events }) {
    return (
      <div className={styles.tm}>
        <div className={styles.tm__line}></div>
        <TimeUnitList events={ events } />
      </div>
    );
  }

export default Timeline;