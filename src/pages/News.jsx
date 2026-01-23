import React from 'react';
import NewsFeed from '../components/NewsFeed.jsx';
import SpaceImagesFeed from '../components/SpaceImagesFeed.jsx';
import '../styles/feeds.css';

const News = () => {
  return (
    <>
    <div className="feedContainer">
      <NewsFeed />
      <SpaceImagesFeed/>
    </div>
    
      <footer>
        <p className="footer">© {new Date().getFullYear()} Heather DeLiso</p>
      </footer>
   </>
  );
};

export default News;
