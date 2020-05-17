import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import mySanityClient from '../sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import SourceList from '../SourceList/SourceList';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './EventList.module.scss';
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

const builder = imageUrlBuilder(mySanityClient);

function urlFor(source) {
    return builder.image(source);
}

function EventList({events, dayZero}) {
    const serializers = {
        types: {
            figure: props => {
                const {node: {alt, caption, image}} = props;
                return (
                    <>
                    <figure>
                        <img 
                            src={urlFor(image)
                                // .width(300)
                                // .height(250)
                                .fit(`clip`)
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

                    return (
                        <li className={styles.event} key={id}>
                            <h2 className={styles.event__heading}>{ heading }</h2>
                            <div className={styles.event__meta}>
                                {dateObj.format(`MMMM Do, YYYY`)} 
                            </div>
                            { undefined !== details && ( 
                                <div className={styles.event__details}>
                                    <BlockContent blocks={details} serializers={serializers} /> 
                                </div>
                            )}
                            <div className={styles.event__meta}>
                                { !!source && source.length > 0 && (
                                    <SourceList sources={source} />
                                )}
                                <p>Added by: {undefined !== authorName ? authorName : `anonymous`}</p>
                            </div>
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