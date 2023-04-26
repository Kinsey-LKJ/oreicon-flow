import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeft = (props) => {
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
        d="M7 6C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18C7.55228 18 8 17.5523 8 17V9.34091L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L9.48687 8H17C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6H7Z"
      ></path>
    </svg>
  );
};

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ArrowUpLeft;
