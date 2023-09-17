import React, { useState } from "react";
function Filter(props) {
  const [gender, setGender] = useState(null);
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const [ageSliderValue, setAgeSliderValue] = useState(50); // Initial age slider value
  const [incomeSliderValue, setIncomeSliderValue] = useState(0); // Initial income slider value

  const handleAgeSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setAgeSliderValue(newValue);
  };

  const handleIncomeSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);

    // Step size increases with income (as the slider value increases)
    const step = newValue <= 1000000 ? 100 : 1000;

    setIncomeSliderValue(newValue);
    event.target.step = step; // Update the step dynamically
  };

  return (
    <div className="px-14 py-9 w-1/4 p-4 font-semibold bg-gray-200">
      <div className="flex text-2xl">Filter:</div>
      <div className="pt-5 ">Sex</div>
      <label className="flex items-center">
        <input
          type="radio"
          name="gender"
          value="male"
          className="form-radio h-5 w-5 text-indigo-600"
          checked={gender === "male"}
          onChange={handleGenderChange}
        />
        <span className="ml-2 text-gray-700 py-2 pr-5"> Male</span>
        <input
          type="radio"
          name="gender"
          value="female"
          className="form-radio h-5 w-5 text-indigo-600"
          checked={gender === "female"}
          onChange={handleGenderChange}
        />
        <span className="ml-2 text-gray-700"> Female</span>
      </label>
      <div className="py-18 pb-4">Race</div>
      <div className="flex w-1/2 items-center grid-cols-2 gap-1">
        <div className="w-1/2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          ></input>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          ></input>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          ></input>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          ></input>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          ></input>
        </div>
        <div className="px-3">
          <div className="translate-y-[-0.35em] text-gray-700"> Hispanic</div>
          <div className="translate-y-[-0.3em] text-gray-700"> Black</div>
          <div className="translate-y-[-0.2em] text-gray-700 whitespace-nowrap">
            {" "}
            Asian/Pacific Islander
          </div>
          <div className="translate-y-[-0.15em] text-gray-700 whitespace-nowrap">
            {" "}
            Native American
          </div>
          <div className="text-gray-700"> White</div>
        </div>
      </div>

      <div className="pt-4">Compensation Rate</div>
      <div className="flex translate-x-[-5rem] py-3 grid-cols-3">
        <div className="w-1/2 px-12"></div>
        <div className="text-gray-700 px-2 py-1"> min</div>
        <input type="textbox" className="w-12"></input>
        <div className="text-gray-500 px-6 py-1"> to </div>
        <div className="w-1/2"></div>
        <div className="text-gray-700 px-2 py-1"> max</div>
        <input type="textbox" className="w-12"></input>
      </div>
      <div>
        <div className="py-2">Age:</div>
        <input
          type="range"
          className="h-1.5 w-full bg-blue-200 rounded-lg"
          min="0"
          max="100"
          step="1"
          id="ageSlider"
          value={ageSliderValue}
          onChange={handleAgeSliderChange}
        />
        <output htmlFor="ageSlider" className="text-xl mt-2 text-center">
          {ageSliderValue}
        </output>

        <div className="py-2">Average Income:</div>
        <input
          type="range"
          className="h-1.5 w-full bg-blue-200 rounded-lg"
          min="0"
          max="100000"
          step="100"
          id="incomeSlider"
          value={incomeSliderValue}
          onChange={handleIncomeSliderChange}
        />
        <output htmlFor="incomeSlider" className="text-xl mt-2 text-center">
          {incomeSliderValue.toLocaleString()}/year
        </output>
      </div>
    </div>
  );
}

export default Filter;
