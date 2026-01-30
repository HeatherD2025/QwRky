import NewsFeed from '../components/NewsFeed.jsx';
// import APOD from '../components/APOD.jsx';
import APODCarousel from "../components/APODCarousel";
import '../styles/feeds.css';

const Feeds = () => {
  return (
    <>
    <div className="mainNewsImagesContainer">

              <div className="col-6 col-lg-4">
                {/* <div className="row">
                  <p className="feedHeader">QwRky News</p>
              </div> */}
                <NewsFeed />
              </div>

              <div className="col-6 col-lg-8 apodContainer">
                <APODCarousel/>
              </div>
    </div>

        <footer>
          <p className="footer">© {new Date().getFullYear()} Heather DeLiso</p>
        </footer>
   </>
  );
};

export default Feeds;
