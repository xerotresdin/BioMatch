import { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import SignUpLogin from './SignUpLogin';
import 'tailwindcss/tailwind.css';

function Main() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App currentUser={currentUser} />} />
        <Route path="/signup-login" element={<SignUpLogin setCurrentUser={setCurrentUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
