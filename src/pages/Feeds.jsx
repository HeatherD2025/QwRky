import React from 'react';
import NewsFeed from '../components/NewsFeed.jsx';
import SpaceImagesFeed from '../components/SpaceImagesFeed.jsx';
import '../styles/feeds.css';

const Feeds = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-6 col-lg-4">
          <NewsFeed />
        </div>

        <div className="col-6 col-lg-8">
          <SpaceImagesFeed/>
        </div>
      </div>
        <footer>
          <p className="footer">© {new Date().getFullYear()} Heather DeLiso</p>
        </footer>
    </div>
   </>
  );
};

export default Feeds;
