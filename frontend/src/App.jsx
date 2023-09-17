import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App(props) {
  const [clinicalTrials, setClinicalTrials] = useState([]);

  useEffect(() => {
    // Check if there is a user logged in (you should have a way to get this information after login)
    // Assuming you have a function getCurrentUser() that returns the current user
    const user = props.currentUser;

    // props.currentUser; // Replace with actual code to get the current user

    // If there is a user logged in, set the currentUser state

    // Fetch data from the server, including the currentUser in the request
    axios.get('http://localhost:3001/api/data', {
      params: {
        user: JSON.stringify(user)
      }
    })
      .then(response => {
        console.log(response.data);
        setClinicalTrials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.currentUser]);

  return (
    <div className="flex flex-col h-screen bg-gray-150 py-4">
      <div className="flex flex-row justify-between items-center">
        <div>
          <img
            className="ml-14 max-w-9 max-h-9 rounded-lg"
            src="../images/BioMatchLogo.jpg"
            alt="BioMatch Logo"
          />
        </div>
        <div className="absolute left-9 top-1 text-3xl font-bold py-4 px-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          BioMatch
        </div>
        <Link to="/signup-login">
          <button className="bg-blue-500 hover:bg-blue-400 text-white text-xs font-sans py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded m-1">
          {props.currentUser === null ? "Sign up / Login": `Welcome back ${props.currentUser.username}`}
        </button>
        </Link>
      </div>
      <hr className="h-px my-4 bg-black" />

      <div className="text-4xl font-semibold text-black text-opacity-70 py-6 pb-1 px-16">
        Find the perfect trial for you
      </div>

      <div className="fonts-sans text-black text-opacity-60 py-1 pb-12 px-16">
        Looking for trials? Browse through the latest clinical postings to find
        and apply for the one that best suits you!
      </div>

      <hr className="h-px  bg-black" />
      <div className="flex flex-row h-full">
        <Filter />
        <SearchBar clinicalTrials={clinicalTrials} />
      </div>
    </div>
  );
}

export default App;
