import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import 'tailwindcss/tailwind.css';

function App() {
  const [clinicalTrials, setClinicalTrials] = useState([]);
  const [query, setQuery] = useState('');

  // Function to handle search
  const handleSearch = (searchQuery) => {
    // Implement search logic here

    console.log('Searching for:', searchQuery);
    // Update clinicalTrials based on the search result

    setClinicalTrials([]);
  };

  return (
    <div className="container mx-auto py-10 flex flex-col items-center"> 
      <SearchBar onSearch={handleSearch} />
      <div className="mt-8"> 
        <h2 className="text-xl font-bold text-red-500 mb-4">Clinical Trial Listings</h2> 
        <div>
          {/* Display clinical trial listings here */}
          {clinicalTrials.map((trial) => (
            <div key={trial.id} className="border p-4 mb-4 rounded-lg">
              <h3 className="text-lg font-semibold">{trial.title}</h3>
              <p className="text-gray-700">{trial.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
