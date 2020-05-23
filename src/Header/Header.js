import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { Helmet } from 'react-helmet';


function CVHeader({ title, description }) {
    return (
        <header className={styles.cv19__header}>
            <Helmet>
                <title>{title}</title>
            </Helmet>                
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