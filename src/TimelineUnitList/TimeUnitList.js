import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import EventsList from '../EventsList/EventList';
import styles from './TimeUnitList.module.scss';

function TimeUnitList({events}) {

    // @todo add test for the sortEvents()
    function sortEvents(events) {
        const grouppedEventsObj = events.reduce( (groups, event) => {
            const date = event.date.split('T')[0];
            const year = date.split('-')[0];
            const month = date.split('-')[1];
            const yearMonth = `${year}-${month}`;
    
            if( !groups[yearMonth] ) {
                groups[yearMonth] = [];
            }
            groups[yearMonth].push(event);
    
            return groups;
        }, {});
    
        const grouppedEventsArr = [];
        for ( const yearMonth in grouppedEventsObj ) {
            const date = yearMonth.split(`-`);
            const label = {
                month: getMonthName(date[1]),
                year: date[0]
            }
            const group = {
                label,
                events: grouppedEventsObj[yearMonth]
            };
            grouppedEventsArr.push(group);
        }
        return grouppedEventsArr;
    }

    // @todo add test for the getMonthName() - probably goodone to start with
    function getMonthName(month) {
        const monthsOfYear = [
            `January`,
            `February`,
            `March`,
            `April`,
            `May`,
            `June`,
            `July`,
            `August`,
            `September`,
            `October`,
            `November`,
            `December`
        ];
        return `${monthsOfYear[month-1]}`;
    }

    const eventsSorted = sortEvents( events );
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
          details: PropTypes.string,
        })
      ).isRequired
};

export default TimeUnitList;
