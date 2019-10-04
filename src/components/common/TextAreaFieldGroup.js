import React from 'react';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  rows
}) => {
  return (
    <div className="form-group">
      <textarea
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        rows={rows}
        className="form-control form-control-lg"
      />
    </div>
  );
};

TextAreaFieldGroup.defaultProps = {
  type: 'text'
};

export default TextAreaFieldGroup;
