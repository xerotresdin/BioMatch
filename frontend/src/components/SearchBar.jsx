import React, { useState } from 'react';
import ClinicalListing from './ClinicalListing';

function SearchBar(props) {
  const [query, setQuery] = useState('');


  return (
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
                {props.fetchedTrials.map((trial) => {
                  return (
                    <li key={trial.id}><ClinicalListing trial={trial} /></li>
                  )
                })}</ul>
            </div>
          </form>
    </div>
  );
}

export default SearchBar;
