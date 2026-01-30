import { useState, useEffect, useRef } from "react";
import { useGetSpaceImagesQuery } from "../features/feeds/apodApi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import '../styles/feeds.css';

const SpaceImagesFeed = () => {
  // state declarations
  const [count, setCount] = useState(15);
  const [imagesShown, setImagesShown] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);
  // const [modalShow, setModalShow] = React.useState(false);

  // data fetching hooks
  const {
    data: spaceImages,
    isLoading: loadingSpaceImages,
    error: errorSpaceImages,
  } = useGetSpaceImagesQuery({ count });

  // button logic
  const handleLoadMore = () => {
    if (loading) return;
    setLoading(true); 
    setCount((prev) => prev + 15);
  };

  // useEffect updates imagesShown when data changes
  useEffect(() => {
    if (!spaceImages || spaceImages.length === 0) return;

    const spaceImagesArray = Array.isArray(spaceImages)
      ? spaceImages
      : [spaceImages];

    const existingDates = new Set(imagesShown.map((img) => img.date));

    const uniqueNewImages = spaceImagesArray.filter(
      (img) => !existingDates.has(img.date),
    );

    if (uniqueNewImages.length > 0) {
      setImagesShown((prev) => [...prev, ...uniqueNewImages]);
    }

    if (spaceImagesArray.length < count) {
      setHasMore(false);
    }
    setLoading(false);
  }, [spaceImages]);

    // infinite scroll effect
      useEffect(() => {
      if (!loadMoreRef.current) return;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting && 
            hasMore && 
            !loading && 
            spaceImages &&
            spaceImages.length < 40
          ) {
            handleLoadMore();
          }
        },
        {
          root: null,
          rootMargin: "200px",
          threshold: 0,
        }
      );
  
      observer.observe(loadMoreRef.current);
  
      return () => observer.disconnect();
    }, [hasMore, loading, spaceImages]);

  // loading and error states
  if (loadingSpaceImages) return <p>Loading images...</p>;
  if (errorSpaceImages) return <p>Error loading images</p>;

  return (
    <>
       <div className="limitedFeedContainer">

        {imagesShown.length === 0 && <p>No images available.</p>}

          {imagesShown.map((image) =>
            image.media_type === "image" ? (
              <div key={image.date} className="spaceImageCard">

                <p className="spaceImageTitle">{image.title}</p>
                <img src={image.url} alt={image.title} className="spaceImage" />
                
              </div>
            ) : null,
          )}

      </div>
    </>
  );
};

export default SpaceImagesFeed;
