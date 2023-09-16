import React from 'react';

function ClinicalListing(props) {
  return (
    <div className="flex border border-gray-300 w-2/3 p-4">
      <div>
        {props.trial.name}
      </div>
    </div>
  )
}

export default ClinicalListing