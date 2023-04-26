import React from 'react';
import PropTypes from 'prop-types';

const BarChart2 = (props) => {
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
        d="M18 9C18.5523 9 19 9.44772 19 10V20C19 20.5523 18.5523 21 18 21 17.4477 21 17 20.5523 17 20V10C17 9.44772 17.4477 9 18 9ZM12 3C12.5523 3 13 3.44772 13 4V20C13 20.5523 12.5523 21 12 21 11.4477 21 11 20.5523 11 20V4C11 3.44772 11.4477 3 12 3ZM6 13C6.55228 13 7 13.4477 7 14V20C7 20.5523 6.55228 21 6 21 5.44772 21 5 20.5523 5 20V14C5 13.4477 5.44772 13 6 13Z"
      ></path>
    </svg>
  );
};

BarChart2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BarChart2.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default BarChart2;
