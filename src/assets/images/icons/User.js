import React from 'react';
import PropTypes from 'prop-types'

function User({fill, width, height, styles}) {
    return (
    <svg className={styles} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width={width} height={height} viewBox="0 0 24 24">
        <defs>
            <path id="prefix__ae" d="M13 12c2.761 0 5 2.239 5 5v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-1.657-1.343-3-3-3H5c-1.657 0-3 1.343-3 3v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-2.761 2.239-5 5-5zM9 0c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm0 2C7.343 2 6 3.343 6 5s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"/>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(3 2)">
            <mask id="prefix__bf" fill="#fff">
                <use xlinkHref="#prefix__ae"/>
            </mask>
            <use fill={fill} fillRule="nonzero" xlinkHref="#prefix__ae"/>
            <g fill="#FFF" mask="url(#prefix__bf)">
                <path d="M0 0H24V24H0z" transform="translate(-3 -2)"/>
            </g>
        </g>
    </svg>
    )
}

User.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    styles: PropTypes.string
};


export default User;