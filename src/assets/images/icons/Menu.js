import React from 'react';
import PropTypes from "prop-types";

function Menu({fill, width, height, styles}) {
    return (
        <svg className={styles} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width={width} height={height} viewBox="0 0 24 24">
            <defs>
                <path id="prefix__r" d="M19 12c.552 0 1 .448 1 1s-.448 1-1 1H1c-.552 0-1-.448-1-1s.448-1 1-1zm0-6c.552 0 1 .448 1 1s-.448 1-1 1H1c-.552 0-1-.448-1-1s.448-1 1-1zm0-6c.552 0 1 .448 1 1s-.448 1-1 1H1c-.552 0-1-.448-1-1s.448-1 1-1z"/>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(2 5)">
                <mask id="prefix__e" fill="#fff">
                    <use xlinkHref="#prefix__r"/>
                </mask>
                <use fill={fill} fillRule="nonzero" xlinkHref="#prefix__r"/>
                <g fill={fill}  mask="url(#prefix__e)">
                    <path d="M0 0H24V24H0z" transform="translate(-2 -5)"/>
                </g>
            </g>
        </svg>
    );
}

Menu.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    styles: PropTypes.string
};

export default Menu;