// src/components/Input/Input.js
import React from 'react';
import './Input.css'; // Estilos específicos para o input

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
      <h1 className='input-field-placeholder'>{placeholder}</h1>
      <input
      type={type}
      value={value}
      onChange={onChange}
      className="input-field"
    />
    </div>
  );
};

export default Input;
