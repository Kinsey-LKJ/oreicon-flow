import React from 'react';
import PropTypes from 'prop-types';

const BookOpen = (props) => {
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
        d="M1 3C1 2.44772 1.44772 2 2 2H8C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21C11 20.4696 10.7893 19.9609 10.4142 19.5858C10.0391 19.2107 9.53043 19 9 19H2C1.44772 19 1 18.5523 1 18V3ZM11 17.5359V7C11 6.20435 10.6839 5.44129 10.1213 4.87868C9.55871 4.31607 8.79565 4 8 4H3V17H9C9.70823 17 10.3971 17.1878 11 17.5359Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4645 3.46447C13.4021 2.52678 14.6739 2 16 2H22C22.5523 2 23 2.44772 23 3V18C23 18.5523 22.5523 19 22 19H15C14.4696 19 13.9609 19.2107 13.5858 19.5858C13.2107 19.9609 13 20.4696 13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V7C11 5.67392 11.5268 4.40215 12.4645 3.46447ZM13 17.5359C13.6029 17.1878 14.2918 17 15 17H21V4H16C15.2044 4 14.4413 4.31607 13.8787 4.87868C13.3161 5.44129 13 6.20435 13 7V17.5359Z"
      ></path>
    </svg>
  );
};

BookOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BookOpen.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default BookOpen;
