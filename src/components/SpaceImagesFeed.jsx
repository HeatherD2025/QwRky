import { useState, useEffect } from "react";
import { useGetSpaceImagesQuery } from "../features/news/apodApi";
import '../styles/feeds.css';

const SpaceImagesFeed = () => {
  // state declarations
  const [count, setCount] = useState(7);
  const [imagesShown, setImagesShown] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // data fetching hooks
  const {
    data: spaceImages,
    isLoading: loadingSpaceImages,
    error: errorSpaceImages,
  } = useGetSpaceImagesQuery({ count });

    // button logic
  const handleLoadMore = () => {
    setCount((prevCount) => prevCount + 5);
  };

  // useEffect updates imagesShown when data changes
  useEffect(() => {
    if (!spaceImages) return;

        const existingDates = new Set(imagesShown.map((img) => img.date));

        const uniqueNewImages = spaceImages.filter(
        (img) => !existingDates.has(img.date)
        );

        if (uniqueNewImages.length > 0) {
        setImagesShown((prev) => [...prev, ...uniqueNewImages]);
        }

        if (spaceImages.count?.length < count) {
        setHasMore(false);
        }
    }, [spaceImages]);

  // loading and error states
  if (loadingSpaceImages) return <p>Loading images...</p>;
  if (errorSpaceImages) return <p>Error loading images</p>;

  return (
    <>
    <div className="background">
      <div className='spaceImagesFeedContainer'>
        <p className="apodHeader">Astronomy Picture of the Day</p>

        {imagesShown.map((image) =>
            image.media_type === 'image' ? (
              <div key={image.date} className="spaceImageCard">
                <img
                  src={image.url}
                  alt={image.title}
                  className="spaceImage"
                />
                <p className="spaceImageTitle">{image.title}</p>
              </div>
            ) : null
        )}

          {hasMore && (
            <button onClick={handleLoadMore} className="feedButton">load more images</button>
          )}
        </div>
      </div>
    </>
  );
};

export default SpaceImagesFeed;