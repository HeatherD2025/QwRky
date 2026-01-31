import React, { useState } from "react";
import { useGetScienceArticlesQuery } from "../features/feeds/scienceNewsApi.js";
import { useGetSpaceArticlesQuery } from "../features/feeds/spaceNewsApi.js";
import { useGetSpaceImagesByDatesQuery } from "../features/feeds/apodApi";
import { FaSearch } from "react-icons/fa"; 
import "../styles/home.css";

export const SearchBar = () => {
// declare use state(s) for updating search bar
//   const [matchFound, setMatchFound] = useState("");
  const [input, setInput] = useState("");
  const [results, setResults] = useState([])
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");

// implement data fetching hooks
const {
    data: scienceData,
    isLoading: loadingScience,
    error: errorScience,
  } = useGetScienceArticlesQuery({ search });

  const {
    data: spaceData,
    isLoading: loadingSpace,
    error: errorSpace,
  } = useGetSpaceArticlesQuery({ search });
const {
    data: spaceImagesByDate,
    isLoading: loadingSpaceImagesByDate,
    error: errorSpaceImagesByDate,
  } = useGetSpaceImagesByDatesQuery({ search });

  const handleSearch = async () => {

  };

// normalize data shape for filter function?
// implement .filter based on the input of user (onclick for search - immediate search later
// reset the search bar after each search
// return articles/images  
    // 1.) in new popup over existing page 
    // 2.) revise feed, render back button to full data set



    return (
        <>
            <div className="searchBarContainer">
                <div className="inputWrapper">
                    <FaSearch id="searchIcon"/>
                    <input 
                      placeholder="Type to search..." 
                      value={input} 
                      onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </div>
        </>
    );
};
