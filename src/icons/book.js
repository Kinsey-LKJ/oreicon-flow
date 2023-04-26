import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
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
        d="M6.5 18C6.10218 18 5.72064 18.158 5.43934 18.4393C5.15804 18.7206 5 19.1022 5 19.5C5 20.0523 4.55228 20.5 4 20.5C3.44772 20.5 3 20.0523 3 19.5C3 18.5717 3.36875 17.6815 4.02513 17.0251C4.6815 16.3687 5.57174 16 6.5 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H6.5Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 3C6.10218 3 5.72064 3.15804 5.43934 3.43934C5.15804 3.72064 5 4.10218 5 4.5V19.5C5 19.8978 5.15804 20.2794 5.43934 20.5607C5.72064 20.842 6.10218 21 6.5 21H19V3H6.5ZM6.5 1H20C20.5523 1 21 1.44772 21 2V22C21 22.5523 20.5523 23 20 23H6.5C5.57174 23 4.6815 22.6313 4.02513 21.9749C3.36875 21.3185 3 20.4283 3 19.5V4.5C3 3.57174 3.36875 2.6815 4.02513 2.02513C4.6815 1.36875 5.57174 1 6.5 1Z"
      ></path>
    </svg>
  );
};

Book.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Book.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Book;
