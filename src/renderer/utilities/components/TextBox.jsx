import React from 'react';
import './TextBox.css';
// eslint-disable-next-line react/prop-types
const TextBox = ({ value, id, onChange, placeholder }) => {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ padding: '10px', fontSize: '16px', width: '100%' }}
    />
  );
};

export default TextBox;
