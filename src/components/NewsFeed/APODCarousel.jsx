import React, { useState } from "react";
import { useGetSpaceImagesByDatesQuery } from "../../features/feeds/apodApi";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../styles/index.css";
import "../../styles/feeds.css";
import ReactModal from "react-modal";
import APODCarouselView from "./APODCarouselView";

// point screen readers to main, hide everything else when modal open
ReactModal.setAppElement("#root");

// fetch data, own state
const APODCarousel = () => {
  // control modal display when open, set active slide tag
  const [isFullscreen, setisFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // pull current date and convert to APOD format (YYYY-MM-DD)
  // fix later with useMemo() so stop recalculation each render
  const today = new Date();
  const end_date = today.toISOString().slice(0, 10);

  // set start date for window two weeks earlier
  const start = new Date();
  start.setDate(today.getDate() - 14);
  const start_date = start.toISOString().slice(0, 10);

  // RTQ Query for APOD
  const { data, isLoading, error } = useGetSpaceImagesByDatesQuery({
    start_date,
    end_date,
  });

  // loading and error messages
  if (isLoading) return <p>Loading images...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  // normalize data in case of API shape variation to prevent map() crashes
  const images = Array.isArray(data) ? data : [];

  // sync both views of carousel, standard and fullscreen
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      {/* embed my normal carousel and props (except isFullscreen - defaults then to false) */}
      <APODCarouselView
        id="fullscreenCarousel"
        images={images}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        onFullscreen={() => setisFullscreen(true)}
      />

      {/* fullscreen modal */}
      <ReactModal
        isOpen={isFullscreen}
        onRequestClose={() => setisFullscreen(false)}
        style={{
          overlay: { backgroundColor: "black" },
          content: {
            maxWidth: "90%",
            maxHeight: "90%",
            margin: "auto",
            position: "relative",
          },
        }}
      >
        <div>
          {/* fullscreen carousel */}
          <APODCarouselView
            id="fullscreenCarousel"
            images={images}
            activeIndex={activeIndex}
            onSelect={handleSelect}
            isFullscreen
            onExitFullscreen={() => setisFullscreen(false)}
          />
        </div>
      </ReactModal>
    </>
  );
};

export default APODCarousel;
