import React from 'react';
import PropTypes from 'prop-types';

const ChevronsUp = (props) => {
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
        d="M11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L17.7071 10.2929C18.0976 10.6834 18.0976 11.3166 17.7071 11.7071C17.3166 12.0976 16.6834 12.0976 16.2929 11.7071L12 7.41421L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L11.2929 5.29289Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2929 12.2929C11.6834 11.9024 12.3166 11.9024 12.7071 12.2929L17.7071 17.2929C18.0976 17.6834 18.0976 18.3166 17.7071 18.7071C17.3166 19.0976 16.6834 19.0976 16.2929 18.7071L12 14.4142L7.70711 18.7071C7.31658 19.0976 6.68342 19.0976 6.29289 18.7071C5.90237 18.3166 5.90237 17.6834 6.29289 17.2929L11.2929 12.2929Z"
      ></path>
    </svg>
  );
};

ChevronsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronsUp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ChevronsUp;
