import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import ClinicalListing from "./components/ClinicalListing";
import 'tailwindcss/tailwind.css';
import axios from "axios";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
import SignUpLogin from './components/SignUpLogin';


function App() {
  const [clinicalTrials, setClinicalTrials] = useState([]);
  const [sliderValue, setSliderValue] = useState("");

  const handleSliderChange = () => {

  };

  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        // Assuming response.data is an array of clinical trials
        setClinicalTrials(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <BrowserRouter>
    <div className="flex flex-col h-screen bg-gray-150 py-4">
      <div className="flex flex-row justify-between items-center"><div>
        <img className="h-auto max-w-full" src="../images/BioMatchLogo.jpg" /></div>
        <div className="absolute left-0 top-1 text-3xl font-bold py-4 px-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Biomatch</div>
          <Link to="/signup-login">
          <button className="bg-blue-500 hover:bg-blue-400 text-white text-xs font-sans py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded m-1">
          Sign up / Login
        </button>
        </Link>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 " />

      <div className="text-4xl font-semibold font-sans text-black-900 py-6 pb-1 px-16">
        Find the perfect trial for you</div>

      <div className="fonts-sans text-black-900 py-1 pb-12 px-16 text-opacity-custom">
        Looking for trials? Browse through the latest clinical trials to find and apply for the one that best suits you!</div>

      <hr className="h-px bg-gray-200 border-0 " />
      <div className="flex flex-row h-full">
        <Filter sliderValue={sliderValue} handleSliderChange={handleSliderChange}/>
        <SearchBar clinicalTrials={clinicalTrials} />
        
      <Routes>
        <Route path="/signup-login" element={<SignUpLogin />} />
      </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;