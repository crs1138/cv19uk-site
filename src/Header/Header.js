import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { Helmet } from 'react-helmet';


function CVHeader({ title, description }) {
    const ogDesc = `A chronological record of how the UK dealt with a pandemic - with sources to all news articles in links`;
    return (
        <header className={styles.cv19__header}>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://crs1138.github.io/cv19-uk-timeline/" />
                <meta property="og:image" content="https://crs1138.github.io/cv19-uk-timeline/cv19-header-openGraph.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="description" content={ogDesc}/>
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