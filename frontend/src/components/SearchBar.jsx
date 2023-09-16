import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    onSearch(inputValue);
  };

  return (
    <div className="flex items-center space-x-4 mt-4"> {/* Use Tailwind CSS classes */}
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-3 py-2" 
      />
      {/* Display live results here */}
    </div>
  );
}

export default SearchBar;
