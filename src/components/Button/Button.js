// src/components/Button/Button.js
import React from 'react';
import './Button.css'; // Estilos específicos para o botão

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
};

export default Button;
