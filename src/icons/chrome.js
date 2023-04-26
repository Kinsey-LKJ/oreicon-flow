import React from 'react';
import PropTypes from 'prop-types';

const Chrome = (props) => {
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
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8C11 7.44772 11.4477 7 12 7H21.17C21.7223 7 22.17 7.44772 22.17 8 22.17 8.55228 21.7223 9 21.17 9H12C11.4477 9 11 8.55228 11 8ZM3.44952 5.19425C3.92766 4.91784 4.53934 5.08138 4.81575 5.55952L9.40575 13.4995C9.68216 13.9777 9.51862 14.5893 9.04048 14.8658 8.56234 15.1422 7.95066 14.9786 7.67425 14.5005L3.08425 6.56048C2.80784 6.08234 2.97138 5.47066 3.44952 5.19425ZM15.9597 13.1338C16.4381 13.4097 16.6022 14.0213 16.3262 14.4997L11.7462 22.4397C11.4703 22.9181 10.8587 23.0822 10.3803 22.8062 9.90194 22.5303 9.73782 21.9187 10.0138 21.4403L14.5938 13.5003C14.8697 13.0219 15.4813 12.8578 15.9597 13.1338Z"
      ></path>
    </svg>
  );
};

Chrome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Chrome.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Chrome;
