import React from 'react';
import PropTypes from 'prop-types';

const CloudLightning = (props) => {
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
      <g clipPath="url(#clip0)">
        <path d="M19 17.9C18.5 17.9 18.1 17.6 18 17.1C17.9 16.6 18.2 16 18.8 15.9C21 15.5 22.4 13.3 21.9 11.2C21.5 9.3 19.9 8 18 8H16.7C16.2 8 15.8 7.7 15.7 7.2C14.7 3.5 10.9 1.2 7.19999 2.2C5.39999 2.7 3.89999 3.8 2.99999 5.4C1.99999 7.1 1.69999 8.9 2.19999 10.8C2.69999 12.7 3.89999 14.2 5.59999 15.2C6.09999 15.4 6.29999 16 5.99999 16.5C5.69999 17 5.09999 17.2 4.59999 16.9C2.39999 15.7 0.89999 13.7 0.19999 11.3C-0.40001 9 -0.100009 6.5 1.19999 4.5C2.39999 2.4 4.39999 1 6.69999 0.4C11.2 -0.8 15.9 1.8 17.4 6.1H18C20.8 6.1 23.3 8.1 23.9 10.9C24.6 14.1 22.5 17.3 19.2 18C19.1 17.9 19.1 17.9 19 17.9Z"></path>
        <path d="M11 24C10.8 24 10.6 23.9 10.4 23.8C9.89999 23.5 9.79999 22.9 10.1 22.4L13.1 18H8.99999C8.59999 18 8.29999 17.8 8.09999 17.5C7.89999 17.2 7.89999 16.8 8.09999 16.5L12.1 10.5C12.4 10 13 9.9 13.5 10.2C14 10.5 14.1 11.1 13.8 11.6L10.8 16H15C15.4 16 15.7 16.2 15.9 16.5C16.1 16.8 16.1 17.2 15.9 17.5L11.9 23.5C11.6 23.8 11.3 24 11 24Z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

CloudLightning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudLightning.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default CloudLightning;
