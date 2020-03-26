import React from 'react';
import PropTypes from 'prop-types';

function Search({fill, width, height, styles}) {
    return (
        <svg className={styles} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width={width} height={height} viewBox="0 0 24 24">
            <defs>
                <path id="prefix__ab" d="M8.5 0C13.194 0 17 3.806 17 8.5c0 1.987-.681 3.814-1.823 5.261l4.53 4.532c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0l-4.532-4.53C12.314 16.319 10.487 17 8.5 17 3.806 17 0 13.194 0 8.5S3.806 0 8.5 0zm0 2C4.91 2 2 4.91 2 8.5S4.91 15 8.5 15c1.77 0 3.376-.708 4.548-1.856l.045-.051c.016-.016.033-.032.05-.046C14.292 11.876 15 10.27 15 8.5 15 4.91 12.09 2 8.5 2z"/>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(2 2)">
                <mask id="prefix__ba" fill="#fff">
                    <use xlinkHref="#prefix__ab"/>
                </mask>
                <use fill={fill} fillRule="nonzero" xlinkHref="#prefix__ab"/>
                <g fill="#262626" mask="url(#prefix__ba)">
                    <path d="M0 0H24V24H0z" transform="translate(-2 -2)"/>
                </g>
            </g>
        </svg>
    );
}

Search.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    styles: PropTypes.string
};

export default Search;