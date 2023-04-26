import React from 'react';
import PropTypes from 'prop-types';

const Code = (props) => {
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
        d="M15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L16.7071 18.7071C16.3166 19.0976 15.6834 19.0976 15.2929 18.7071 14.9024 18.3166 14.9024 17.6834 15.2929 17.2929L20.5858 12 15.2929 6.70711C14.9024 6.31658 14.9024 5.68342 15.2929 5.29289ZM8.70711 5.29289C9.09763 5.68342 9.09763 6.31658 8.70711 6.70711L3.41421 12 8.70711 17.2929C9.09763 17.6834 9.09763 18.3166 8.70711 18.7071 8.31658 19.0976 7.68342 19.0976 7.29289 18.7071L1.29289 12.7071C.902369 12.3166.902369 11.6834 1.29289 11.2929L7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289Z"
      ></path>
    </svg>
  );
};

Code.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Code.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Code;
