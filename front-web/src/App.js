import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [message, setMessage] = useState(''); 
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log('API URL:', apiUrl); // Adicione isso para verificar se a URL está correta
  
  useEffect(() => {
    axios.get(`${apiUrl}/hello`)
      .then(response => {
        setMessage(response.data); 
      })
      .catch(error => {
        console.error('Erro ao fazer requisição:', error);
        setMessage('Server not running');
      });
  }, [apiUrl]); 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <h1>{message}</h1>
      </header>
    </div>
  );
}

export default App;
