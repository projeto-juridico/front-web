import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [message, setMessage] = useState(''); // Inicializa como string vazia

  useEffect(() => {
    console.log('Fazendo requisição para o backend...');
    axios.get('http://localhost:3001/')
      .then(response => {
        console.log('Resposta recebida:', response.data);
        setMessage(response.data); // Atualiza o estado com a mensagem do backend
      })
      .catch(error => {
        console.error('Erro ao fazer requisição:', error);
      });
  }, []); // Executa apenas uma vez após o primeiro render

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <h1>{message}</h1> {/* Exibe a mensagem recebida do backend */}
      </header>
    </div>
  );
}

export default App;
