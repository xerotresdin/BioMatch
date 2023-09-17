import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

function SignUpLogin() {

  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginForm) {
      console.log('Login form submitted:', formData);
    } else {
      console.log('Signup form submitted:', formData);
    }
  };


  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="w-[390px] p-10 rounded-2xl shadow-2xl text-center">
        <div className="flex flex-row px-12 items-center mt-4"><div className="mr-2">
          <img className="max-w-9 max-h-9 rounded-lg" src="../images/BioMatchLogo.jpg" alt="BioMatch Logo" />
        </div>
          <div className="m-1 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Biomatch</div>
        </div>
        <div className="relative mt-5">
          <input type="radio" name="slide" id="login" checked={isLoginForm} readOnly className="hidden" />
          <input type="radio" name="slide" id="signup" checked={!isLoginForm} readOnly className="hidden" />
          <div className="slider-tab absolute h-full w-[50%] top-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl transition-transform duration-300"></div>
        </div>


        <form className={isLoginForm ? '' : 'hidden'} onSubmit={handleSubmit}>
          <div className="field mt-10">
            <input type="text" placeholder="Email Address" required className="w-full p-4 border border-gray-300 rounded-lg" />
          </div>
          <div className="field mt-5">
            <input type="password" placeholder="Password" required className="w-full p-4 border border-gray-300 rounded-lg" />
          </div>
          <div className="pass-link text-center mt-5">
            <a href="#" className="text-blue-500">

              Forgot password?</a>
          </div>


          <div className="field btn relative mt-5">
            <div className="btn-layer absolute top-0 left-0 w-full p-4 bg-gradient-to-r from-blue-500 to-indigo-500 border border-blue-700 rounded-lg 
              transition-all duration-300">
              <a href="#" onClick={toggleForm} className="font-semibold text-2xl text-white">
                Login
              </a>
            </div>
            <input type="submit" value="Login" className="z-10 w-full h-full p-4 text-white bg-transparent border-none rounded-lg cursor-pointer" />
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
              <a href="#" onClick={toggleForm} className="font-semibold text-2xl text-white">
                Login
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
