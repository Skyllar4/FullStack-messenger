import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';
import './Styles/main.scss';
import { MainAuth } from './Components/AuthComponents/MainAuth/MainAuth';

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
