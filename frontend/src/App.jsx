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
    <div className="container mx-auto py-10 flex flex-col items-center"> 
      <SearchBar onSearch={handleSearch} />
      <div className="mt-8"> 
        <h2 className="text-xl font-bold text-red-500 mb-4 mt-12 text-center">Clinical Trial Listings</h2> 
        <ul>
          {fetchedTrials.map((trial) => {
            return (
              <li key={trial.id}> <ClinicalListing trial={trial}/> </li>
            )
          })}
        </ul>
        
      </div>
    </div>
  );
}

export default App;
