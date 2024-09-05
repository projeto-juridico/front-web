// src/components/Input/Input.js
import React from 'react';
import './Input.css'; // Estilos específicos para o input

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-field"
    />
  );
};

export default Input;
