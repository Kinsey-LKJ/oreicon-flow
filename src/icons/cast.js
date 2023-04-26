import React from 'react';
import PropTypes from 'prop-types';

const Cast = (props) => {
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
        d="M4.00001 5C3.7348 5 3.48044 5.10536 3.29291 5.29289C3.10537 5.48043 3.00001 5.73478 3.00001 6V8C3.00001 8.55228 2.5523 9 2.00001 9C1.44773 9 1.00001 8.55228 1.00001 8V6C1.00001 5.20435 1.31608 4.44129 1.87869 3.87868C2.4413 3.31607 3.20436 3 4.00001 3H20C20.7957 3 21.5587 3.31607 22.1213 3.87868C22.6839 4.44129 23 5.20435 23 6V18C23 18.7957 22.6839 19.5587 22.1213 20.1213C21.5587 20.6839 20.7957 21 20 21H14C13.4477 21 13 20.5523 13 20C13 19.4477 13.4477 19 14 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8947 18.5196 21 18.2652 21 18V6C21 5.73478 20.8947 5.48043 20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H4.00001ZM1.00614 11.9395C1.06719 11.3906 1.56165 10.9951 2.11055 11.0561C4.36698 11.3071 6.47086 12.3184 8.07623 13.9238C9.68161 15.5292 10.6929 17.633 10.9439 19.8895C11.0049 20.4384 10.6095 20.9328 10.0606 20.9939C9.51165 21.0549 9.01719 20.6594 8.95614 20.1105C8.75537 18.3054 7.94632 16.6223 6.66202 15.338C5.37772 14.0537 3.69462 13.2446 1.88948 13.0439C1.34057 12.9828 0.945093 12.4884 1.00614 11.9395ZM1.02018 15.9002C1.13055 15.359 1.6587 15.0098 2.19984 15.1202C3.35291 15.3553 4.41137 15.9244 5.2435 16.7565C6.07563 17.5886 6.64468 18.6471 6.87984 19.8002C6.99021 20.3413 6.64099 20.8695 6.09984 20.9798C5.5587 21.0902 5.03055 20.741 4.92018 20.1998C4.76341 19.4311 4.38404 18.7255 3.82929 18.1707C3.27454 17.616 2.5689 17.2366 1.80018 17.0798C1.25904 16.9695 0.90982 16.4413 1.02018 15.9002Z"
      ></path>
    </svg>
  );
};

Cast.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cast.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Cast;
