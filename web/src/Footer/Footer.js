import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import styles from './Footer.module.scss';

function Footer({ content }) {
    return (
        <footer className={styles.tm__footer}>
            <div className="container">
                <BlockContent blocks={content} />
            </div>
        </footer>
    );
}

Footer.propTypes = {
    content: PropTypes.array.isRequired,
}

export default Footer;