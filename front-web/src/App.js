import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [message, setMessage] = useState(''); 

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(response => {
        setMessage(response.data); 
      })
      .catch(error => {
        console.error('Erro ao fazer requisição:', error);
        setMessage('Server not running');
      });
  }, []); 

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
