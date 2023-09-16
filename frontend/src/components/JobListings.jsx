import React from 'react';

const JobListings = ({ listings }) => {
  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {listings.map((listing, index) => (
          <li key={index}>{listing}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
