import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ClinicalListing from "./components/ClinicalListing";
import 'tailwindcss/tailwind.css';
import axios from "axios";

function App() {
  const [fetchedTrials, setFetchedTrials] = useState([]);
  const [clinicalTrials, setClinicalTrials] = useState([]);
  const [query, setQuery] = useState('');

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
      <div className="flex flex-col h-screen bg-gray-180">
        <div className="flex flex-row">
          <img className="h-auto max-w-full" src="./assets/images/BioMatchLogo.jpg"/>
          <div className="text-3xl font-bold py-3 px-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Biomatch
          </div>
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200" />
        <div className="text-4xl font-semibold font-sans bg-gray-180 text-black-900 py-6 px-16">
          Find the perfect trial for
        </div>
        <div className="text-0.5xl fonts-sans bg-gray-180 text-black-900 py-4 px-16">
          Looking for trials? Browse the latest clinical trial openings to view & apply to the best trial for you
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-300" />
        <div className="flex flex-row h-full">
          <div className="px-16 py-9 w-1/4 p-4 font-semibold  bg-gray-200">
            Filter:
          </div>
          <div className="w-3/4 p-4 bg-gray-300">
            <ul>
              {fetchedTrials.map((trial) => {
                return (
                  <li key={trial.id}><ClinicalListing trial={trial}/></li>
                )
              })}
            </ul>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>
    );
  }

export default App;