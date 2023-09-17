function Filter(props) {
  return (
    <div className="px-14 py-9 w-1/4 p-4 font-semibold bg-gray-200">
      <div className="flex text-2xl">Filter:</div>
      <div className="pt-5 ">Sex</div>
      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
        <span className="ml-2 text-gray-700 py-2 pr-5"> Male</span>
        <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
        <span className="ml-2 text-gray-700"> Female</span>
      </label>
      <div className="py-18 pb-4">Race</div>
      <div className="flex w-1/2 items-center grid-cols-2 gap-1">
        <div className="w-1/2">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600"></input>
        </div>
        <div className="px-3">
          <div className="translate-y-[-0.35em] text-gray-700"> Hispanic</div>
          <div className="translate-y-[-0.3em] text-gray-700"> Black</div>
          <div className="translate-y-[-0.2em] text-gray-700 whitespace-nowrap"> Asian/Pacific Islander</div>
          <div className="translate-y-[-0.15em] text-gray-700 whitespace-nowrap"> Native American</div>
          <div className="text-gray-700"> White</div>
        </div>
      </div>

      <div className="pt-4">Compensation Rate</div>
      <div className="flex translate-x-[-5rem] py-3 grid-cols-3">   
        <div className = "w-1/2"></div>
        <div className="text-gray-700 px-2"> min</div>
        <input type ="textbox" className="w-12"></input>
        <div className = "w-1/3"></div>
        <div className="text-gray-700 px-2"> max</div>
        <input type ="textbox" className="w-12"></input>
      </div>
      <div>
        <div className = "py-2">Age:</div>
        <input type = "range" className="h-1.5 w-full bg-blue-200 rounded-lg " min = "0" max = "100" step = "1" id ="slider" value={props.sliderValue}
        onChange={props.handleSliderChange}></input>
        <output htmlFor="slider" className="text-xl mt-2 text-center">50</output>
      </div>
  </div>
  )
}

export default Filter;