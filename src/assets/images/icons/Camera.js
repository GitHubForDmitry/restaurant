import React from 'react';
import PropTypes from "prop-types";

function Camera({fill, width, height, styles}) {
    return (
        <svg className={styles} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width={width} height={height} viewBox="0 0 24 24">
            <defs>
                <path id="prefix__c" d="M15 0c.334 0 .647.167.832.445L17.535 3H21c1.657 0 3 1.343 3 3v11c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h3.465L8.168.445C8.353.167 8.666 0 9 0h6zm-.535 2h-4.93L7.832 4.555C7.647 4.833 7.334 5 7 5H3c-.552 0-1 .448-1 1v11c0 .552.448 1 1 1h18c.552 0 1-.448 1-1V6c0-.552-.448-1-1-1h-4c-.334 0-.647-.167-.832-.445L14.465 2zM12 6c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm0 2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"/>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(0 2)">
                <mask id="prefix__f" fill="#fff">
                    <use xlinkHref="#prefix__c"/>
                </mask>
                <use fill={fill} fillRule="nonzero" xlinkHref="#prefix__c"/>
                <g fill={fill} mask="url(#prefix__f)">
                    <path d="M0 0H24V24H0z" transform="translate(0 -2)"/>
                </g>
            </g>
        </svg>
    );
}

Camera.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    styles: PropTypes.string
};

export default Camera;