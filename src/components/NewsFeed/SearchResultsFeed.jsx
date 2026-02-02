import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar.jsx";
import ArticleCard from "./ArticleCard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/index.css";
import "../../styles/feeds.css";

const SearchResultsFeed = ({results}) => {
 if (!results.length) {
    return <p>No matching articles found</p>
 }

  return (
    <>
      <div className="searchFeedContainer">
        {results.map((article, index) => (
            <ArticleCard key={index} article={article}/>
        ))}
      </div>
    </>
  );
};

export default SearchResultsFeed;
