import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownRight = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L14.5858 16H7C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H16.9993H17C17.001 18 17.002 18 17.003 18C17.1375 17.9996 17.2657 17.9727 17.3828 17.9241C17.498 17.8764 17.6062 17.8063 17.7005 17.7136C17.7049 17.7093 17.7093 17.7049 17.7136 17.7005C17.8901 17.5208 17.9992 17.2746 18 17.003C18 17.002 18 17.001 18 17V16.9993V7C18 6.44772 17.5523 6 17 6C16.4477 6 16 6.44772 16 7V14.5858L7.70711 6.29289Z"
      ></path>
    </svg>
  );
};

ArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ArrowDownRight;
