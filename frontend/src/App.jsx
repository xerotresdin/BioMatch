import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ClinicalListing from "./components/ClinicalListing";
import 'tailwindcss/tailwind.css';
import axios from "axios";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
import SignUpLogin from './components/SignUpLogin';


function App() {
  const [fetchedTrials, setFetchedTrials] = useState([]);
  const [clinicalTrials, setClinicalTrials] = useState([]);
  const [query, setQuery] = useState('');
  const [sliderValue, setSliderValue] = useState("");

  const handleSliderChange = () => {

  };

  // Function to handle search
  const handleSearch = (searchQuery) => {
    // Implement search logic here
    console.log('Searching for:', searchQuery);
    // Update clinicalTrials based on the search result
    setClinicalTrials([]);
  };

  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        // Assuming response.data is an array of clinical trials
        setFetchedTrials(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <BrowserRouter>
    <div className="flex flex-col h-screen bg-gray-150 py-4">
      <div className="flex flex-row justify-between items-center"><div>
        <img className="h-auto max-w-full" src="./assets/images/BioMatchLogo.jpg" /></div>
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
        <div className="px-14 py-9 w-1/4 p-4 font-semibold bg-gray-200">

          <div className="flex text-2xl">Filter:
          </div>
          <div className="pt-5 ">Sex</div>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
            <span className="ml-2 text-gray-700 py-2 pr-5"> Male</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
            <span className="ml-2 text-gray-700"> Female</span>
          </label>
          <div className="py-18 pb-4">Race</div>
          <div className="flex w-1/2 items-center grid-cols-2 gap-1">
            <div className="w-1/2">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
            </div>
            <div className="px-3">
              <div className="translate-y-[-0.35em] text-gray-700"> Hispanic</div>
              <div className="translate-y-[-0.3em] text-gray-700"> Black</div>
              <div className="translate-y-[-0.2em] text-gray-700 whitespace-nowrap"> Asian/Pacific Islander</div>
              <div className="translate-y-[-0.15em] text-gray-700 whitespace-nowrap"> Native American</div>
              <div className="text-gray-700"> White</div>
            </div>
          </div>
          
          <div className="pt-4">Compensation Rate</div>
          <div className="flex translate-x-[-5rem] py-3 grid-cols-3">   
            <div className = "w-1/2"></div>
            <div className="text-gray-700 px-2"> min</div>
            <input type ="textbox" className="w-12"></input>
            <div className = "w-1/3"></div>
            <div className="text-gray-700 px-2"> max</div>
            <input type ="textbox" className="w-12"></input>
          </div>
          <div>
            <div className = "py-2">Age:</div>
            <input type = "range" className="h-1.5 w-full bg-blue-200 rounded-lg " min = "0" max = "100" step = "1">
              
            </input>
            <output htmlFor="slider" className="text-xl mt-2 text-center">50</output>
          </div>

          <div className="pt-4">Compensation Rate</div>
          <div className="flex translate-x-[-5rem] py-3 grid-cols-3">   
            <div className = "w-1/2"></div>
            <div className="text-gray-700 px-2"> min</div>
            <input type ="textbox" className="w-12"></input>
            <div className = "w-1/3"></div>
            <div className="text-gray-700 px-2"> max</div>
            <input type ="textbox" className="w-12"></input>
          </div>
          <div>
            <div className = "py-2">Age:</div>
            <input type = "range" className="h-1.5 w-full bg-blue-200 rounded-lg " min = "0" max = "100" step = "1" id ="slider" value={sliderValue}
            onChange={handleSliderChange}></input>
            <output htmlFor="slider" className="text-xl mt-2 text-center">50</output>
          </div>
        </div>
        <div className="w-3/4 p-4 bg-gray-300">

          <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" /></svg></div>

              <input type="search" id="default-search" className="block w-full p-4 pl-10 text-smtext-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Clinical Trials, Studies, etc..." required />
              <button type="submit" className="text-white absolute right-2.5 bottom-1.5 px-8 py-2
              bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400  font-semibold border-b-4 
              border-purple-700 hover:border-blue-500 rounded">
                search</button>

              <ul>
                {fetchedTrials.map((trial) => {
                  return (
                    <li key={trial.id}><ClinicalListing trial={trial} /></li>
                  )
                })}</ul>

            </div>
          </form>

        </div>
      <Routes>
        <Route path="/signup-login" element={<SignUpLogin />} />
      </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;