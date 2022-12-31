import React from 'react';
import Gap from '../Gap';

const Input = ({
  label,
  placeholder,
  name,
  forLabel,
  style,
  span,
  type,
  option,
}) => {
  return (
    <div className={`form-input flex flex-col lg:col-span-${span}`}>
      <label for={forLabel}>{label}</label>
      <Gap height="h-3" />
      {console.log(type)}
      {/* {function () {
        switch (type) {
          case 'select':
            return (
              <select className="bg-gray-input px-4 py-1.5 rounded-md">
                {option.map((option) => {
                  return <option key={option}>{option}</option>;
                })}
              </select>
            );
          case 'message':
            return (
              <textarea
                name="message"
                className="h-24 bg-gray-input px-4 py-2.5 rounded-md "
                placeholder={placeholder}
              ></textarea>
            );
          case 'input':
            return (
              <input
                name={name}
                placeholder={placeholder}
                className={`${style} bg-gray-input`}
              />
            );
          default:
            return null;
        }
      }} */}
      {type === 'select' ? (
        <select className="bg-gray-input px-4 py-1.5 rounded-md" name={name}>
          {option.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      ) : type === 'input' ? (
        <input
          name={name}
          placeholder={placeholder}
          className={`${style} bg-gray-input`}
        />
      ) : (
        <textarea
          name="message"
          className="h-24 bg-gray-input px-4 py-2.5 rounded-md "
          placeholder={placeholder}
        ></textarea>
      )}
    </div>
  );
};

export default Input;
