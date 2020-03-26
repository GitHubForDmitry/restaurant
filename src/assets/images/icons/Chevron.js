import React from 'react';
import PropTypes from "prop-types";

function Chevron({fill, width, height, styles}) {
    return (
        <svg className={styles} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width={width} height={height} viewBox="0 0 24 24">
            <defs>
                <path id="prefix__a" d="M7 5.586L1.707.293c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414l6 6c.39.39 1.024.39 1.414 0l6-6c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L7 5.586z"/>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(5 8)">
                <mask id="prefix__b" fill="#fff">
                    <use xlinkHref="#prefix__a"/>
                </mask>
                <use fill={fill} fillRule="nonzero" xlinkHref="#prefix__a"/>
                <g fill={fill} mask="url(#prefix__b)">
                    <path d="M0 0H24V24H0z" transform="translate(-5 -8)"/>
                </g>
            </g>
        </svg>

    );
}
Chevron.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    styles: PropTypes.string
};
export default Chevron;