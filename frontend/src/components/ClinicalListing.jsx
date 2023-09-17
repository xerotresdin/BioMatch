import React from 'react';

function ClinicalListing(props) {
  return (
    <div className="bg-white border border-blue-300 p-4 mb-4 rounded-lg shadow-md">
      <div className="text-xl font-bold mb-2">
        {props.trial.trialName ? `${props.trial.trialName}` : `${props.trial.name}`}
      </div>
      <div className="text-gray-700 mb-2">
        <strong>Description:</strong> {props.trial.trialName ? `${props.trial.details.description}` : `${props.trial.description}`}
      </div>
      <div className="text-gray-700 mb-2">
        <strong>Compensation:</strong> {props.trial.trialName ? `${props.trial.details.description}` : `${props.trial.compensation}`}
      </div>
      <div className="text-gray-700">
        <strong>Institution:</strong> {props.trial.trialName ? `${props.trial.details.institution}` : `${props.trial.institution}`}
      </div>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
        Apply
      </button>
    </div>
  )
}

export default ClinicalListing
