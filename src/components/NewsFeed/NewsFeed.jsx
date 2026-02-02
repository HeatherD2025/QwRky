import React, { useState } from "react";
import { getToken } from "../../utils/tokenService.js";
import SearchBar from "./SearchBar.jsx";
import NormalNewsFeed from "./NormalNewsFeed.jsx";
import SearchResultsFeed from "./SearchResultsFeed.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/index.css";
import "../../styles/feeds.css";

const NewsFeed = () => {
  // // state declarations
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <div className="newsFeedContainer">
        <p className="feedHeader">QwRky Science News</p>

        <div className="searchBarContainer">
          <SearchBar
            setSearchResults={setSearchResults}
            setIsSearching={setIsSearching}
          />
        </div>

        {isSearching ? (
          <SearchResultsFeed results={searchResults} />
        ) : (
          <NormalNewsFeed />
        )}

      </div>
    </>
  );
};

export default NewsFeed;
