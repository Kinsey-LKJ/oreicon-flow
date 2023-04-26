import React from 'react';
import PropTypes from 'prop-types';

const Award = (props) => {
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2ZM4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8C20 12.4183 16.4183 16 12 16C7.58172 16 4 12.4183 4 8Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6585 12.8887C16.206 12.816 16.7087 13.201 16.7813 13.7485L17.9913 22.8685C18.0418 23.2491 17.8699 23.625 17.549 23.8358C17.228 24.0466 16.8148 24.055 16.4855 23.8575L12 21.1662L7.5145 23.8575C7.18522 24.0551 6.77191 24.0466 6.45096 23.8358C6.13002 23.625 5.95815 23.249 6.00871 22.8683L7.21871 13.7583C7.29142 13.2109 7.79419 12.826 8.34167 12.8987C8.88914 12.9714 9.27401 13.4742 9.2013 14.0217L8.26445 21.0751L11.4855 19.1425C11.8022 18.9525 12.1978 18.9525 12.5145 19.1425L15.7359 21.0753L14.7987 14.0115C14.726 13.464 15.111 12.9613 15.6585 12.8887Z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

Award.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Award.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Award;
