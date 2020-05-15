import React from 'react';
import PropTypes from 'prop-types';
import styles from './SourceList.module.scss';

function SourceList({ sources }) {
    return (
        <>
        <p>{sources.length > 1 ? `Sources:` : `Source:`}</p>
        <ul className={styles.sources}>
            {
                sources.map( source => {
                    const {_key, blank, title, url} = source;
                    
                    return (
                    <li key={_key} className={styles.source}>
                        <a href={url} title={title} target={!!blank ? `_blank` : `_self`}>{!!title ? title : url}</a>
                    </li>
                )})
            }
        </ul>
        </>
    );
}

SourceList.propTypes = {
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            _key:   PropTypes.string.isRequired,
            blank:  PropTypes.bool,
            title:  PropTypes.string,
            url:    PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SourceList;