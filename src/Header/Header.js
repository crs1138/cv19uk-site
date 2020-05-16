import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

function CVHeader({ title, description }) {
    return (
        <header className={styles.cv19__header}>
            <div className="container">
                <h1 className={styles.cv19__title}>{ title }</h1>
            </div>
        </header>
    )
}

CVHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.array
}

export default CVHeader;