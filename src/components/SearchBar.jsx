import { useState } from "react";
import { useGetScienceArticlesQuery } from "../features/feeds/scienceNewsApi.js";
import { useGetSpaceArticlesQuery } from "../features/feeds/spaceNewsApi.js";
import { useGetSpaceImagesQuery } from "../features/feeds/apodApi";

const SearchBar = () => {
// declare use state(s) for updating search bar
  const [matchFound, setMatchFound] = useState("")
  const [loading, setloading] = useState(false)
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
    data: spaceImages,
    isLoading: loadingSpaceImages,
    error: errorSpaceImages,
  } = useGetSpaceImagesQuery({ search });

// normalize data shape for filter function?
// implement .filter based on the input of user (onclick for search - immediate search later
// reset the search bar after each search
// return articles/images  
    // 1.) in new popup over existing page 
    // 2.) revise feed, render back button to full data set



    return (
        <></>
    )
}
