import React from 'react';
import PropTypes from 'prop-types';
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
Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      details: PropTypes.array,
    })
  ).isRequired
};

export default Timeline;