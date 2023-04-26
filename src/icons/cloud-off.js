import React from 'react';
import PropTypes from 'prop-types';

const CloudOff = (props) => {
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
        <path d="M8.90001 21C5.60001 21 2.60001 19.2 1.00001 16.4C-0.199993 14.3 -0.399993 11.9 0.200007 9.6C0.900007 7.3 2.40001 5.4 4.50001 4.2C5.00001 3.9 5.60001 4 5.90001 4.5C6.10001 5 6.00001 5.6 5.50001 5.9C3.90001 6.8 2.70001 8.3 2.20001 10.1C1.70001 11.9 1.90001 13.8 2.80001 15.4C4.00001 17.7 6.40001 19.1 9.00001 19H18C18.5 19 18.9 18.9 19.4 18.8C19.9 18.6 20.5 18.9 20.7 19.4C20.9 19.9 20.6 20.5 20.1 20.7C19.4 20.9 18.8 21.1 18.1 21.1H9.00001C9.00001 21 8.90001 21 8.90001 21ZM22.6 18C22.5 18 22.3 18 22.2 17.9C21.7 17.7 21.5 17.1 21.7 16.6C22.6 14.6 21.6 12.2 19.6 11.4C19.1 11.2 18.6 11.1 18 11.1H16.7C16.2 11.1 15.8 10.8 15.7 10.3C15 7.4 12.6 5.3 9.60001 5C9.00001 5 8.60001 4.5 8.70001 3.9C8.70001 3.4 9.20001 2.9 9.80001 3C13.3 3.3 16.3 5.7 17.5 9H18C18.8 9 19.6 9.2 20.3 9.5C23.3 10.8 24.8 14.3 23.5 17.4C23.4 17.7 23 18 22.6 18Z"></path>
        <path d="M23 24C22.7 24 22.5 23.9 22.3 23.7L0.300007 1.7C-0.0999925 1.3 -0.0999925 0.7 0.300007 0.3C0.700007 -0.1 1.30001 -0.1 1.70001 0.3L23.7 22.3C24.1 22.7 24.1 23.3 23.7 23.7C23.5 23.9 23.3 24 23 24Z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

CloudOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudOff.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default CloudOff;
