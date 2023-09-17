import React, { useState } from 'react';
import ClinicalListing from './ClinicalListing';

function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filteredTrials = props.clinicalTrials.filter((trial) => {
    if (query === '') {
      return trial;
    }
    return trial.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="w-3/4 p-4 bg-gray-300">
      <form className="relative">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="flex items-center">
          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Clinical Trials, Studies, etc..." required value={query} onChange={handleInputChange} />
          <button type="submit" className="text-white px-8 py-2 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 font-semibold border-b-4 border-purple-700 hover:border-blue-500 rounded">
            Search
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pl-3">
          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
      </form>
      <ul>
        {filteredTrials.map((trial) => {
          return (
            <li key={trial.id}><ClinicalListing trial={trial} /></li>
          )
        })}
      </ul>
    </div>
  );
}

export default SearchBar;
