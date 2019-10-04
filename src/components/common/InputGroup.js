import React from 'react';

const InputGroup = ({ name, placeholder, type, value, onChange }) => {
  return (
    <div className="form-group">
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="form-control form-control-lg"
      />
    </div>
  );
};

export default InputGroup;
