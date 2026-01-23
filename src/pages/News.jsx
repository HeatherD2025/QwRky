import React from 'react';
import NewsFeed from '../components/NewsFeed.jsx';
import '../styles/news.css';

const News = () => {
  return (
    <>
      <NewsFeed />
      <footer>
        <p className="footer">© {new Date().getFullYear()} Heather DeLiso</p>
      </footer>
   </>
  );
};

export default News;
