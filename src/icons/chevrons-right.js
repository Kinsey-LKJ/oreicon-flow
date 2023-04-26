import React from 'react';
import PropTypes from 'prop-types';

const ChevronsRight = (props) => {
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
        d="M12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289L18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L13.7071 17.7071C13.3166 18.0976 12.6834 18.0976 12.2929 17.7071C11.9024 17.3166 11.9024 16.6834 12.2929 16.2929L16.5858 12L12.2929 7.70711C11.9024 7.31658 11.9024 6.68342 12.2929 6.29289Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.29289 6.29289C5.68342 5.90237 6.31658 5.90237 6.70711 6.29289L11.7071 11.2929C12.0976 11.6834 12.0976 12.3166 11.7071 12.7071L6.70711 17.7071C6.31658 18.0976 5.68342 18.0976 5.29289 17.7071C4.90237 17.3166 4.90237 16.6834 5.29289 16.2929L9.58579 12L5.29289 7.70711C4.90237 7.31658 4.90237 6.68342 5.29289 6.29289Z"
      ></path>
    </svg>
  );
};

ChevronsRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronsRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ChevronsRight;
