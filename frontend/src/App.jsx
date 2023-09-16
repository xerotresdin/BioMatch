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
      <div className="bg-blue-500 text-white py-4 px-8">Biomatch</div>
      <div className="flex flex-row h-full">
        <div className="w-1/4 p-4 bg-gray-200">
          Left Container (1/4 of viewport)
        </div>
        <div className="w-3/4 p-4 bg-gray-300">
          Right Container (3/4 of viewport)
        </div>
      </div>
    </div>
  );
}

export default App;
