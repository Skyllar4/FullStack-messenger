import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {

  return (
    <ul>
      <li><Link to="register">Регистрация</Link></li>
      <li><Link to="login">Войти</Link></li>
      <li><Link to="profile">Профиль</Link></li>
    </ul>
  );
}

export default App;
