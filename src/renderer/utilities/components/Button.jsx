import React from 'react';

import './Button.css';
// eslint-disable-next-line react/prop-types
const Button = ({ onClick, text, className, disabled }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={className}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
