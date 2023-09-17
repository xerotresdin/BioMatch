import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import SignUpLogin from './SignUpLogin';
import 'tailwindcss/tailwind.css';

const [currentUser, setCurrentUser] = useState(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App currentUser={currentUser}/>} />
      <Route path="/signup-login" element={<SignUpLogin />} setCurrentUser={setCurrentUser}/>
    </Routes>
  </BrowserRouter>
);
