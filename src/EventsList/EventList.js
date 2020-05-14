import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import mySanityClient from '../sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './EventList.module.scss';
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

// @todo change the way to display details as formatted text @see https://www.sanity.io/docs/block-content
// @todo add author to meta data
// @todo add source link to meta data

const builder = imageUrlBuilder(mySanityClient);

function urlFor(source) {
    return builder.image(source);
}

function EventList({events, dayZero}) {
    const serializers = {
        types: {
            code: props => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            ),
            figure: props => {
                console.dir(props);
                const {node: {alt, caption, image}} = props;
                return (
                    <>
                    <figure>
                        <img 
                            src={urlFor(image)
                                .width(300)
                                .height(250)
                                .url()
                            } 
                            alt={alt} />
                        <figcaption>{caption}</figcaption>
                    </figure>
                    </>
                );
            }
        }
    }

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
                    // console.table(details)
                    return (
                        <li className={styles.event} key={id}>
                            <h2 className={styles.event__heading}>{ heading }</h2>
                            <div className={styles.event__meta}>
                                {dateObj.format(`MMMM Do, YYYY`)} 
                                <p>{date === dayZero ? `Day 0` : `~${dateObj.from(dayZero, true)} since day\u00A00`}</p>
                                <p>Source: {undefined !== source ? source : `unknown`}</p>
                                <p>Added by: {undefined !== authorName ? authorName : `anonymous`}</p>
                            </div>
                            { undefined !== details && ( <BlockContent blocks={details} serializers={serializers} /> )}
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
            details: PropTypes.array,
            authorName: PropTypes.string,
        })
    ).isRequired,
    dayZero: PropTypes.string.isRequired
};

export default EventList;