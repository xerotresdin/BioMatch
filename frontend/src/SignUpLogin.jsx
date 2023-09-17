import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './SignUpLogin.css';
import 'tailwindcss/tailwind.css';

function SignUpLogin(props) {
  const navigate = useNavigate();

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLoginUsernameChange = (event) => {
    setLoginUsername(event.target.value);
  }
  const handleLoginPasswordChange = (event) => {
    setLoginPassword(event.target.value);
  }

  const handleLogin = (event) => {
    axios.post("http://localhost:3001/api/signin", {
      username: loginUsername,
      password: loginPassword
    }, {
      headers: {
        "Content-Type": "application/json",
      },
   
    })
    .then((response) => {
      props.setCurrentUser(response.data.foundUser);
      navigate("/");
    })
    .catch((error) => {
      console.error(error);
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginForm) {
      console.log('Login form submitted');
    } else {
      console.log('Signup form submitted:');
    }
  };

  const handleLogoClick = () => {
    // Redirect to the main page (replace with the actual URL)
    window.location.href = '/';
  };


  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="w-[390px] p-10 rounded-2xl shadow-2xl text-center">
      <div className="flex flex-row px-12 items-center mt-4">
      <div className="mr-2 logo-image" onClick={handleLogoClick}>
        <img className="max-w-9 max-h-9 rounded-lg" src="../public/BioMatchLogo.jpg" alt="BioMatch Logo" />
      </div>
      <div className="m-1 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 logo-text" onClick={handleLogoClick}>
        Biomatch
      </div>
        </div>
        <div className="relative mt-5">
          <input type="radio" name="slide" id="login" checked={isLoginForm} readOnly className="hidden" />
          <input type="radio" name="slide" id="signup" checked={!isLoginForm} readOnly className="hidden" />
          <div className="slider-tab absolute h-full w-[50%] top-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl transition-transform duration-300"></div>
        </div>


        <form className={isLoginForm ? '' : 'hidden'} onSubmit={handleSubmit}>
          <div className="field mt-10">
            <input type="text" placeholder="Username" required value={loginUsername} className="w-full p-4 border border-gray-300 rounded-lg" onChange={handleLoginUsernameChange}/>
          </div>
          <div className="field mt-5">
            <input type="password" placeholder="Password" required value={loginPassword} className="w-full p-4 border border-gray-300 rounded-lg" onChange={handleLoginPasswordChange}/>
          </div>
          <div className="pass-link text-center mt-5">
            <a href="#" className="text-blue-500">

              Forgot password?</a>
          </div>


          <div className="field btn relative mt-5">
            <div className="btn-layer absolute top-0 left-0 w-full p-4 bg-gradient-to-r from-blue-500 to-indigo-500 border border-blue-700 rounded-lg 
              transition-all duration-300">
              <a href="#" onClick={handleLogin} className="font-semibold text-2xl text-white">
                Login
              </a>
            </div>
            <input type="submit" className="z-10 w-full h-full p-4 text-white bg-transparent border-none rounded-lg cursor-pointer" />
          </div>
          <div className="signup-link text-center mt-5">

            Create an account <a href="#" onClick={toggleForm} className="text-blue-500">

              Sign up now</a>
          </div>


        </form>


        <form className={isLoginForm ? 'hidden' : ''} onSubmit={handleSubmit}>
          <div className="field mt-5">
            <input type="text" placeholder="Name" required className="w-full p-4 border border-gray-300 rounded-lg" />
          </div>
          <div className="field mt-5">
            <input type="text" placeholder="Email Address" required className="w-full p-4 border border-gray-300 rounded-lg" />
          </div>
          <div className="field mt-5">
            <input type="password" placeholder="Password" required className="w-full p-4 border border-gray-300 rounded-lg" />
          </div>
          <div className="field mt-5">
            <input type="password" placeholder="Confirm password" required className="w-full p-4 border border-gray-300 rounded-lg" />
          </div>
          <div className="field btn relative mt-5">

            <div className="btn-layer absolute top-0 left-0 w-full p-4 bg-gradient-to-r from-blue-500 to-indigo-500 border border-blue-700 rounded-lg 
              transition-all duration-300">
              <a href="#" className="font-semibold text-2xl text-white">
                Sign Up
              </a>
            </div>
          </div>
          <input type="submit" value="Signup" className="z-10 w-full h-full p-4 text-white bg-transparent border-none rounded-lg cursor-pointer" />
          <div className="signup-link text-center mt-5">
            Already have an account? <a href="#" onClick={toggleForm} className="text-blue-500">

              Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpLogin;
