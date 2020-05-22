import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import EventsList from '../EventsList/EventList';
import Helpers from '../library/Helpers';
import styles from './TimeUnitList.module.scss';

function TimeUnitList({events}) {
    const { regroupEvents } = Helpers;
    const eventsRegrouped = regroupEvents( events );

    return (
        <ul className={styles.time_units}>
            {                
                eventsRegrouped.map( unit => {
                    const {label, events} = unit;
                    return (
                        <li className={styles.time_unit} key={uuidv4()}>
                            <div className={styles.time_unit__label}>{ label.month }<span>{ label.year }</span></div>
                            <EventsList events={ events } />
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

export default TimeUnitList;
