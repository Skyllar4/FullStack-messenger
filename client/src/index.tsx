import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { Profile } from './Components/Profile/Profile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='register' element={<Register />}/>
        <Route path="login" element={<Login/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
