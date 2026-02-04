import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "../../styles/feeds.css";

// define component for both views and props
const APODCarouselView = ({
  images,
  activeIndex,
  onSelect,
  onFullscreen,
  isFullscreen = false,
  onExitFullscreen,
}) => {
    
  return (
    <div style={{ position: "relative" }}>
     {/* Close button visible in fullscreen mode only */}
      {isFullscreen && onExitFullscreen && (
        <button
            style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 2000,
                fontSize: "1.5rem",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                cursor: "pointer",
            }}
            onClick={onExitFullscreen}
            >
            ✕
        </button>
      )}

      <Carousel
        activeIndex={activeIndex}
        onSelect={onSelect}
        interval={null}
        indicators={false}
        controls={true}
      >
        {images.map((image) => (
            <Carousel.Item key={image.date}>
                {/* fill carousel height and center images w/apod-slid e*/}
                <div className="apod-slide"> 
                    <Image
                    //  follow apod-image base rules and conditionally apply nnormal vs fullscreen to img
                        className={`apod-image ${isFullscreen ? "apod-image--fullscreen" : "apod-image--normal"}`}
                        src={image.url}
                        alt={image.title}
                    />
                </div>

              <Carousel.Caption>
                <p>{image.title}</p>

            {/* show button when in standard view mode */}
                {!isFullscreen && onFullscreen && (
                  <button
                    className="btn btn-sm btn-bd-custom"
                    onClick={onFullscreen}
                  >
                    View Fullscreen
                  </button>
                )}
              </Carousel.Caption>
            </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default APODCarouselView;
