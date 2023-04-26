import React from 'react';
import PropTypes from 'prop-types';

const BarChart = (props) => {
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
        d="M12 9C12.5523 9 13 9.44772 13 10V20C13 20.5523 12.5523 21 12 21 11.4477 21 11 20.5523 11 20V10C11 9.44772 11.4477 9 12 9ZM18 3C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21 17.4477 21 17 20.5523 17 20V4C17 3.44772 17.4477 3 18 3ZM6 15C6.55228 15 7 15.4477 7 16V20C7 20.5523 6.55228 21 6 21 5.44772 21 5 20.5523 5 20V16C5 15.4477 5.44772 15 6 15Z"
      ></path>
    </svg>
  );
};

BarChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BarChart.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default BarChart;
