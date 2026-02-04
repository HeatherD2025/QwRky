import React from "react";
import { Suspense, lazy } from "react";
import NewsFeed from "../components/NewsFeed/NewsFeed.jsx";
// import APOD from '../components/APOD.jsx';
const APODCarouselContainer = lazy(
  () => import("../components/NewsFeed/APODCarouselContainer.jsx"),
);
import "../styles/feeds.css";

const Feeds = () => {
  return (
    <>
      <div className="main-news-images-container">
        <div className="col-6 col-lg-8 apod-container">
          <Suspense
            fallback={
              <div>Astronomy Picture of the Day is loading, please wait...</div>
            }
          >
            <APODCarouselContainer />
          </Suspense>
        </div>

        <div className="col-6 col-lg-4">
          <NewsFeed />
        </div>
      </div>

      <footer>
        <p className="footer">© {new Date().getFullYear()} Heather DeLiso</p>
      </footer>
    </>
  );
};

export default Feeds;
