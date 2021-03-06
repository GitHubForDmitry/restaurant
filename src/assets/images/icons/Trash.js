import React from 'react';
import PropTypes from "prop-types";

function Trash({fill, width, height, styles}) {
    return (
        <svg className={styles} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width={width} height={height} viewBox="0 0 24 24">
            <defs>
                <path id="prefix__y" d="M12 0c1.657 0 3 1.343 3 3v1h4c.513 0 .936.386.993.883L20 5c0 .552-.448 1-1 1h-1v13c0 1.598-1.249 2.904-2.824 2.995L15 22H5c-1.657 0-3-1.343-3-3V6H1c-.513 0-.936-.386-.993-.883L0 5c0-.552.448-1 1-1h4V3C5 1.402 6.249.096 7.824.005L8 0zm4 6H4v13c0 .513.386.936.883.993L5 20h10c.552 0 1-.448 1-1V6zM8 9c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1s-1-.448-1-1v-6c0-.552.448-1 1-1zm4 0c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1s-1-.448-1-1v-6c0-.552.448-1 1-1zm0-7H8c-.552 0-1 .448-1 1v1h6V3c0-.513-.386-.936-.883-.993L12 2z"/>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(2 1)">
                <mask id="prefix__by" fill="#fff">
                    <use xlinkHref="#prefix__y"/>
                </mask>
                <use fill={fill} fillRule="nonzero" xlinkHref="#prefix__y"/>
                <g fill={fill}  mask="url(#prefix__by)">
                    <path d="M0 0H24V24H0z" transform="translate(-2 -1)"/>
                </g>
            </g>
        </svg>

    );
}

Trash.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    styles: PropTypes.string
};

export default Trash;