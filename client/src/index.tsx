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
import { Profile } from './Components/Profile/Profile';
import { MainChatComponent } from './Components/MainChat/MainChatComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='profile' element={<Profile/>}/>
        <Route path='chat' element={<MainChatComponent/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
