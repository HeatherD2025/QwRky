import React, { useState, useEffect } from "react";
// import { useGetScienceArticlesQuery } from "../../features/feeds/scienceNewsApi.js";
// import { useGetSpaceArticlesQuery } from "../../features/feeds/spaceNewsApi.js";
import { useGetLatestNewsQuery } from "../../features/feeds/currentsApi.js";
// import { useGetSpaceImagesQuery } from "../features/feeds/apodApi";
import "../../styles/feeds.css";

const SearchBar = ({ setSearchResults, setIsSearching }) => {
  // declare use state(s) for updating search bar
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const currentDate = new Date();
  // format to YYYY-MM-DD)
  const startDate =
    currentDate.getFullYear() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getDate();
  const endDate =
    currentDate.getFullYear() -
    1 +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getDate();

  // implement data fetching hooks
  // const scienceQuery = useGetScienceArticlesQuery();
  // const spaceQuery = useGetSpaceArticlesQuery({ page: 1, pageSize: 10 });
  const currentsQuery = useGetLatestNewsQuery();
  //   const apodQuery = useGetSpaceImagesQuery({
  //     start_date: startDate,
  //     end_date: endDate,
  //   });

  const handleSearch = () => {
    if (!input.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      setError("");
      return;
    }

    const searchTerm = input.toLowerCase();

    // const filteredScienceArticles =
    //   scienceQuery.data?.articles?.filter((a) =>
    //     a.title?.toLowerCase().includes(searchTerm),
    //   ) ?? [];
    // const filteredSpaceArticles =
    //   spaceQuery.data?.results?.filter((a) =>
    //     a.title?.toLowerCase().includes(searchTerm),
    //   ) ?? [];
    const filteredCurrentsArticles =
      currentsQuery.data?.results?.filter((a) =>
        a.title?.toLowerCase().includes(searchTerm),
      ) ?? [];
    // const filteredSpaceImages =
    //   apodQuery.data?.filter((img) =>
    //     img.title.toLowerCase().includes(searchTerm),
    //   ) ?? [];

    const combinedResults = [
      // ...filteredScienceArticles,
      // ...filteredSpaceArticles,
      ...filteredCurrentsArticles,
      //   ...filteredSpaceImages,
    ];

    if (combinedResults.length === 0) {
      setSearchResults([]);
      setIsSearching(true);
      setError("No matching articles found");
      return;
    }

    setError("");
    setSearchResults(combinedResults);
    setIsSearching(true);
  };

  useEffect(() => {
    handleSearch();
    // }, [input, scienceQuery.data, spaceQuery.data, currentsQuery.data]);
  }, [input, currentsQuery.data]);

  return (
    <>
      <div className="input-wrapper">
        <input
          placeholder="Type to search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default SearchBar;
