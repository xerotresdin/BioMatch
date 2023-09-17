import React from 'react';

function ClinicalListing(props) {
  return (
    <div className="flex border border-blue-300 w-full p-4">
      <div>
        {props.trial.name}
      </div>
    </div>
  )
}

export default ClinicalListing