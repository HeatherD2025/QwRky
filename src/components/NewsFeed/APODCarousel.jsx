import React from "react";
import Image from "react-bootstrap/Image";
import { useGetSpaceImagesByDatesQuery } from "../../features/feeds/apodApi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/index.css";
import "../../styles/feeds.css";
import { Carousel } from "react-bootstrap";

const APODCarousel = () => {
  // fix later with useMemo()
  const today = new Date();
  const end_date = today.toISOString().slice(0, 10);

  const start = new Date();
  start.setDate(today.getDate() - 14);
  const start_date = start.toISOString().slice(0, 10);

  const {
    data: dateRangeSpaceImages,
    isLoading,
    error,
  } = useGetSpaceImagesByDatesQuery({ start_date, end_date });

  if (isLoading) return <p>Loading images...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  const dateRangeImages = Array.isArray(dateRangeSpaceImages)
    ? dateRangeSpaceImages
    : [];

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

  //   const dateRangeImages = Array.isArray(dateRangeSpaceImages)
  //     ? dateRangeSpaceImages
  //     : [];

  //   const currentImage = dateRangeImages[imageIndex];

  // function must know the current index
  // and know the length of the date range array
  //   const handleNextImage = () => {
  //     setImageIndex((prevIndex) => {
  //     if (prevIndex >= dateRangeImages.length - 1) return prevIndex;
  //       return prevIndex + 1;
  //     });
  //   };

  //   const handlePrevImage = () => {
  //     setImageIndex((prevIndex) => {
  //       if (prevIndex <= 0) return prevIndex;
  //       return prevIndex - 1;
  //     });
  //   };

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

  return (
    <>
      <Carousel interval={null} indicators={false}>
        {dateRangeImages.map((image) => (
          <Carousel.Item key={image.date}>
            <Image
              className="d-block w-75"
              src={image.url}
              alt={image.title}
              fluid
            />
            <Carousel.Caption>
              <p>{image.title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default APODCarousel;
