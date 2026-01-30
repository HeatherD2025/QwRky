import NewsFeed from '../components/NewsFeed.jsx';
import SpaceImagesFeed from '../components/SpaceImagesFeed.jsx';
import '../styles/feeds.css';

const Feeds = () => {
  return (
    <>
    <div className="row">
        <div className="feedHeaderContainer">
          <p className="feedHeader1">QwRky News</p>
          <p className="feedHeader2">Astronomy Picture of the Day</p>
        </div>
      </div>

    <div className="feedsContainer">
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
