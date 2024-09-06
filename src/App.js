import React from 'react';
import './App.css'; 
import Login from './components/Login/Login'; 
import Header from './components/Header/Header'


function App() {
  return (
    <div className="app-container">
      <Header title='Petição Descomplicada'></Header>
      <div className='login-wrapper'>
        <Login className='login-form' />
      </div>
    </div>
  );
}

export default App;
