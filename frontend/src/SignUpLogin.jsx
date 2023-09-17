import React, { useState } from 'react';

function SignUpLogin() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="w-[390px] bg-white p-10 rounded-2xl shadow-xl text-center">
        <div className={`title ${isLoginForm ? 'text-blue-500' : 'text-black'}`}>
          {isLoginForm ? 'Login Form' : 'Signup Form'}
        </div>
        <div className="flex justify-between mt-5">
          <label htmlFor="login" className={`slide cursor-pointer relative ${isLoginForm ? 'text-blue-500' : 'text-black'}`}>
            <span className="relative z-10">Login</span>
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${isLoginForm ? 'from-blue-500 to-indigo-500' : 'from-black to-indigo-700'}`}></div>
          </label>
          <label htmlFor="signup" className={`slide cursor-pointer relative ${isLoginForm ? 'text-black' : 'text-blue-500'}`}>
            <span className="relative z-10">Signup</span>
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${isLoginForm ? 'from-black to-indigo-700' : 'from-blue-500 to-indigo-500'}`}></div>
          </label>
        </div>
        <div className="relative mt-5">
          <input type="radio" name="slide" id="login" checked={isLoginForm} readOnly className="hidden" />
          <input type="radio" name="slide" id="signup" checked={!isLoginForm} readOnly className="hidden" />
          <div className="slider-tab absolute h-full w-[50%] top-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl transition-transform duration-300"></div>
        </div>
        <form className={isLoginForm ? '' : 'hidden'} action="#">
          <div className="field mt-5">
            <input type="text" placeholder="Email Address" required className="w-full p-4 border border-gray-300 rounded-lg" />
          </div>
          <div className="field mt-5">
            <input type="password" placeholder="Password" required className="w-full p-4 border border-gray-300 rounded-lg" />
          </div>
          <div className="pass-link text-center mt-5">
            <a href="#" className="text-blue-500">Forgot password?</a>
          </div>
          <div className="field btn relative mt-5">
            <div className="btn-layer absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 border border-blue-700 rounded-lg transition-all duration-300"></div>
            <input type="submit" value="Login" className="z-10 w-full h-full p-4 text-white bg-transparent border-none rounded-lg cursor-pointer" />
          </div>
          <div className="signup-link text-center mt-5">
            Create an account <a href="#" onClick={toggleForm} className="text-blue-500">Sign up now</a>
          </div>
        </form>
        <form className={isLoginForm ? 'hidden' : ''} action="#">
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
            <div className="btn-layer absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 border border-blue-700 rounded-lg transition-all duration-300"></div>
            <input type="submit" value="Signup" className="z-10 w-full h-full p-4 text-white bg-transparent border-none rounded-lg cursor-pointer" />
          </div>
          <div className="signup-link text-center mt-5">
            Already have an account? <a href="#" onClick={toggleForm} className="text-blue-500">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpLogin;
