import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './EventList.module.scss';
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

// @todo change the way to display details as formatted text @see https://www.sanity.io/docs/block-content
// @todo add author to meta data
// @todo add source link to meta data
function EventList({events, dayZero}) {
    return (
        <ul className={styles.events}>
            {
                events.map( event => {
                    const {
                        _id: id, 
                        heading, 
                        details, 
                        date, 
                        authorName,
                        source,
                    } = event;
                    const dateObj = dayjs(date);
                    return (
                        <li className={styles.event} key={id}>
                            <h2 className={styles.event__heading}>{ heading }</h2>
                            <div className={styles.event__meta}>
                                {dateObj.format(`MMMM Do, YYYY`)} 
                                <p>{date === dayZero ? `Day 0` : `~${dateObj.from(dayZero, true)} since day\u00A00`}</p>
                                <p>Source: {undefined !== source ? source : `unknown`}</p>
                                <p>Added by: {undefined !== authorName ? authorName : `anonymous`}</p>
                            </div>
                            { undefined !== details && details}
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
            _id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            heading: PropTypes.string.isRequired,
            details: PropTypes.string,
            authorName: PropTypes.string,
        })
    ).isRequired,
    dayZero: PropTypes.string.isRequired
};

export default EventList;