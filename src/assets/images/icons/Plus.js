import React from 'react';
import PropTypes from "prop-types";

function Plus({fill, width, height, styles}) {
    return (
        <svg className={styles} width={width} height={height} viewBox="0 0 24 24">
            <defs>
                <path id="prefix__ac" d="M8 0c.552 0 1 .448 1 1v6h6c.513 0 .936.386.993.883L16 8c0 .552-.448 1-1 1H9v6c0 .513-.386.936-.883.993L8 16c-.552 0-1-.448-1-1V9H1c-.513 0-.936-.386-.993-.883L0 8c0-.552.448-1 1-1h6V1c0-.513.386-.936.883-.993z"/>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(4 4)">
                <mask id="prefix__bd" fill="#fff">
                    <use xlinkHref="#prefix__ac"/>
                </mask>
                <use fill="#000" fillRule="nonzero" xlinkHref="#prefix__ac"/>
                <g fill={fill} mask="url(#prefix__bd)">
                    <path d="M0 0H24V24H0z" transform="translate(-4 -4)"/>
                </g>
            </g>
        </svg>
    );
}

Plus.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    styles: PropTypes.string
};

export default Plus;