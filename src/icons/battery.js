import React from 'react';
import PropTypes from 'prop-types';

const Battery = (props) => {
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
        d="M3 7C2.44772 7 2 7.44772 2 8V16C2 16.5523 2.44772 17 3 17H17C17.5523 17 18 16.5523 18 16V8C18 7.44772 17.5523 7 17 7H3ZM0 8C0 6.34315 1.34315 5 3 5H17C18.6569 5 20 6.34315 20 8V16C20 17.6569 18.6569 19 17 19H3C1.34315 19 0 17.6569 0 16V8ZM23 10C23.5523 10 24 10.4477 24 11V13C24 13.5523 23.5523 14 23 14 22.4477 14 22 13.5523 22 13V11C22 10.4477 22.4477 10 23 10Z"
      ></path>
    </svg>
  );
};

Battery.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Battery.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Battery;
