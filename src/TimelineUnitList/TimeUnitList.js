import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import EventsList from '../EventsList/EventList';
import Helpers from '../library/Helpers';
import styles from './TimeUnitList.module.scss';

function TimeUnitList({events}) {
    const { regroupEvents } = Helpers;
    
    const eventsSorted = regroupEvents( events );
    const dayZero = eventsSorted[0].events[0].date;

    return (
        <ul className={styles.time_units}>
            {                
                eventsSorted.map( unit => {
                    const {label, events} = unit;
                    return (
                        <li className={styles.time_unit} key={uuidv4()}>
                            <div className={styles.time_unit__label}>{ label.month }<span>{ label.year }</span></div>
                            <EventsList events={ events } dayZero={dayZero} />
                        </li>
                    );
                })
            }
        </ul>
    );
}
TimeUnitList.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          heading: PropTypes.string.isRequired,
          details: PropTypes.array,
        })
      ).isRequired
};

export default TimeUnitList;
