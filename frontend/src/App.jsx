import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ClinicalListing from "./components/ClinicalListing"
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
    <div className="flex flex-col h-screen">
      <div className="text-5xl font-bold py-3 px-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
           Biomatch </div>
      <div className="text-1xl font- bg-gray-200 text-black-900 py-3 px-12">
          Find the perfect trial for you </div>
      <div className="text-0.5xl font-normal bg-gray-200 text-black-900 py-3 px-12">
          Looking for trials? Browse the latest clinical trial openings to view & apply to the best trial for you</div>
      <div className="flex flex-row h-full">
        <div className="w-1/4 p-4 bg-gray-200">
          Left Container (1/4 of viewport)
        </div>
        <div className="w-3/4 p-4 bg-gray-300">
          <ul>
            {fetchedTrials.map((trial) => {
              return (
                <li key={trial.id}><ClinicalListing trial={trial}/></li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
