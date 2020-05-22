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
      _id:     PropTypes.string.isRequired,
      date: function(props, propName, componentName){
        if ( !/^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(props[propName] )) {
            return new Error(
                `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`
            );
        }
      },
      heading: PropTypes.string.isRequired,
      details: PropTypes.array,
    })
  ).isRequired
};

export default Timeline;