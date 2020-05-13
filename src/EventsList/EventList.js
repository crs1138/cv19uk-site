import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './EventList.module.scss';
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

function EventList({events, dayZero}) {
    return (
        <ul className={styles.events}>
            {
                events.map( event => {
                    const {heading, details, date, id} = event;
                    const dateObj = dayjs(date);
                    return (
                        <li className={styles.event} key={id}>
                            <h2 className={styles.event__heading}>{ heading }</h2>
                            <div className={styles.event__meta}>{dateObj.format(`MMMM Do, YYYY`)} <p>{date === dayZero ? `Day 0` : `~${dateObj.from(dayZero, true)} since day\u00A00`}</p></div>
                            {!!details && details}
                        </li>
                    );
                })
            }
        </ul>
    );
}
EventList.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            heading: PropTypes.string.isRequired,
            details: PropTypes.string,
        })
    ).isRequired,
    dayZero: PropTypes.string.isRequired
};

export default EventList;