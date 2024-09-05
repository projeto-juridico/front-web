// src/components/Login/Login.js
import React, { useState } from 'react';
import Input from '../Input/Input'; // Componente de entrada de texto
import Button from '../Button/Button'; // Componente de botão
import './Login.css'; // Estilos específicos do Login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Adicione a lógica de login aqui
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <p className="login-subtitle">
        Novo por aqui? <a href="#">Crie uma conta</a>
      </p>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#" className="forgot-password">Esqueci minha senha</a>
        <Button text="Entrar" />
      </form>
    </div>
  );
};

export default Login;
