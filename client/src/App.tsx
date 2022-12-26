import React from 'react';
import './App.css';
import { Layout } from './Components/Layout/Layout';
import './Styles/main.scss';
import { MainAuth } from './Components/AuthComponents/MainAuth/MainAuth';
// import { io } from "socket.io-client";

// const socket = io('http://localhost:3000');

function App() {

  return  <Layout>
              <MainAuth />
          </Layout>
    // <ul>
    //   <li><Link to="register" className='pr'>Регистрация</Link></li>
    //   <li><Link to="login">Войти</Link></li>
    //   <li><Link to="profile">Профиль</Link></li>
    // </ul>
}

export default App;
