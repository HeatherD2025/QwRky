import { useState, useRef } from "react";
import {
  useGetSpaceImagesByDatesQuery,
} from "../features/feeds/apodApi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import "../styles/feeds.css";

// const SpaceImagesFeed = () => {
const SpaceImagesArray = () => {
  // state declarations
  const [count, setCount] = useState(15);
  const [imageIndex, setImageIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);


  // fix later with useMemo()
  const today = new Date();
  const end_date = today.toISOString().slice(0, 10);

  const start = new Date();
  start.setDate(today.getDate() - 14);
  const start_date = start.toISOString().slice(0, 10);


  // data fetching hooks
  const {
    data: dateRangeSpaceImages,
    isLoading,
    error,
  } = useGetSpaceImagesByDatesQuery({ start_date, end_date });

  // button logic
  // const handleLoadMore = () => {
  //   if (loading) return;
  //   setLoading(true);
  //   setCount((prev) => prev + 15);
  // };

  // useEffect updates imagesShown when data changes
  // everything downstream can assume dateRangeImages[index]
  // useEffect(() => {
  //   if (!dateRangeSpaceImages || dateRangeSpaceImages.length === 0) return;

  // });
  
  const dateRangeImages = Array.isArray(dateRangeSpaceImages)
    ? dateRangeSpaceImages
    : [];

  const currentImage = dateRangeImages[imageIndex];

    // const existingDates = new Set(dateRangeSpaceImages.map((img) => img.date));

    // if (existingDates.length > 0) {
    //   setImagesShown((prev) => [...prev, ...uniqueNewImages]);
    // }

  //   if (dateRangeImages.length < count) {
  //     setHasMore(false);
  //   }
  //   setLoading(false);
  // }, [dateRangeSpaceImages]);

  // infinite scroll effect
  //   useEffect(() => {
  //   if (!loadMoreRef.current) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (
  //         entry.isIntersecting &&
  //         hasMore &&
  //         !loading &&
  //         spaceImages &&
  //         spaceImages.length < 40
  //       ) {
  //         handleLoadMore();
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: "200px",
  //       threshold: 0,
  //     }
  //   );

  //   observer.observe(loadMoreRef.current);

  //   return () => observer.disconnect();
  // }, [hasMore, loading, spaceImages]);

  // loading and error states
  if (isLoading)
    return <p>Loading image...</p>;
  if (error)
    return <p>Error loading images</p>;

  return (
    <>

        {currentImage && (
          <>
          <img 
            src={todaysSpaceImage?.url}
            alt={todaysSpaceImage.title}
            className="spaceImage"
          >
          </img>

           <p className="spaceImageTitle">{todaysSpaceImage.title}</p>

          <div className="prevNextButtonContainer">
            <button
              onClick={handlePrevImage}
              className="btn btn-bd-primary btn-sm prevNextButton"
            >Previous
            </button>

            <button
              onClick={handleNextImage}
              className="btn btn-bd-primary btn-sm prevNextButton"
            >Next
            </button>
          </div>
          </>
        )}
    </>
  );
};

export default SpaceImagesArray;
