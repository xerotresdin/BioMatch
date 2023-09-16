import React, { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.taget.value;
        setQuery(inputValue);
        // Add search logic based on the inputValue

        console.log('Searching for:' inputValue);
        // Update using logic to display live results
    };

    return (
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
          {/* Display live results here */}
        </div>
      );
    }
    
    export default SearchBar;