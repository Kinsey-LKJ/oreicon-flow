import React from 'react';
import PropTypes from 'prop-types';

const Calendar = (props) => {
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
        d="M5 5C4.44772 5 4 5.44772 4 6V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V6C20 5.44772 19.5523 5 19 5H5ZM2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1C16.5523 1 17 1.44772 17 2V6C17 6.55228 16.5523 7 16 7 15.4477 7 15 6.55228 15 6V2C15 1.44772 15.4477 1 16 1ZM8 1C8.55228 1 9 1.44772 9 2V6C9 6.55228 8.55228 7 8 7 7.44772 7 7 6.55228 7 6V2C7 1.44772 7.44772 1 8 1ZM2 10C2 9.44771 2.44772 9 3 9H21C21.5523 9 22 9.44771 22 10 22 10.5523 21.5523 11 21 11H3C2.44772 11 2 10.5523 2 10Z"
      ></path>
    </svg>
  );
};

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Calendar.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Calendar;
