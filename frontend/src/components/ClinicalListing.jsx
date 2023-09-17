import React from 'react';

function ClinicalListing(props) {
  return (
    <div className="flex border border-red-300 w-full p-4">
      <div>
        {props.trial.trialName}
      </div>
    </div>
  )
}

export default ClinicalListing