import React, { useState, useEffect, useRef } from "react";
import { useGetScienceArticlesQuery } from "../features/feeds/scienceNewsApi.js";
import { useGetSpaceArticlesQuery } from "../features/feeds/spaceNewsApi.js";
import { getToken } from "../utils/tokenService.js";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import "../styles/feeds.css";

const NewsFeed = () => {
  // // state declarations
  const [page, setPage] = useState(1);
  const [articlesShown, setArticlesShown] = useState([]);
  // const [hasToken, setHasToken] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loadMoreRef = useRef(null);


  // authNeeded check
  // useEffect(() => {
  //   const token = getToken();
  //   setHasToken(!!token);
  // }, []);

  // data fetching hooks
  const {
    data: scienceData,
    isLoading: loadingScience,
    error: errorScience,
  } = useGetScienceArticlesQuery({ page, pageSize: 50 });

  const {
    data: spaceData,
    isLoading: loadingSpace,
    error: errorSpace,
  } = useGetSpaceArticlesQuery({ page, pageSize: 50 });

  // button logic
  const handleLoadMore = () => {
    if (loading) return;
    setLoading(true); 
    setPage((prev) => prev + 1);
  };

  const handleArticleDetail = (articleUrl) => {
    navigate(`/article/${encodeURIComponent(articleUrl)}`);
    console.log("attempting to navigate");
  };

  // useEffect updates articlesShown when data changes
  useEffect(() => {
    const existingTitles = new Set(articlesShown.map((a) => a.title));
    const newArticles = [
      ...(scienceData?.articles || []),
      ...(spaceData?.results || []), // spaceData uses `.results` not `.articles`
    ];

    const uniqueNewArticles = newArticles.filter(
      (article) => !existingTitles.has(article.title),
    );

    if (uniqueNewArticles.length > 0) {
      setArticlesShown((prev) => [...prev, ...uniqueNewArticles]);
    }

    if (
      scienceData &&
      scienceData.articles?.length < 30 &&
      spaceData &&
      spaceData.results?.length < 30
    ) {
      setHasMore(false);
    }

    setLoading(false);
  }, [scienceData, spaceData]);


  // filtering
  const topics = [
    "aerodynamics",
    "aerolites",
    "aerostatics",
    "areology",
    "andromeda",
    "antineutrino",
    "antineutrinos",
    "antimatter",
    "antiprotons",
    "asteroid",
    "astrobotany",
    "astronaut",
    "astronomy",
    "astrophysics",
    "astonomer",
    "astonomers",
    "atmospheric sciences",
    "atom",
    "atoms",
    "atomic",
    "atmospheric sciences",
    "astrophysics",
    "astrophysists",
    "barology",
    "boson",
    "celestial mechanics",
    "CERN",
    "centauri",
    "cosmic",
    "cosmology",
    "comet",
    "cometology",
    "coniology",
    "electron",
    "electrodynamics",
    "electrohydrodynamics",
    "electromagnetic",
    "electromagnetism",
    "exobiology",
    "exoplanetology",
    "fermilab",
    "galatic",
    "galaxy",
    "genomics",
    "gluon",
    "gravity",
    "gravitational",
    "gyrostatics",
    "Hawking",
    "heliology",
    "helioseismology",
    "hermeology",
    "higgs",
    "hubble",
    "jupiter",
    "kuiper",
    "LHC",
    "LIGO",
    "hadron",
    "lepton",
    "light-years",
    "mars",
    "magnetostatics",
    "mercury",
    "meteor",
    "meteoritics",
    "microbiology",
    "molecular biology",
    "moon",
    "multiverse",
    "muon",
    "NASA",
    "near-earth",
    "nebula",
    "necroplanetology",
    "neptune",
    "neuroscience",
    "neutron",
    "neutrino",
    "nuclear physics",
    "observatory",
    "oort cloud",
    "orbit",
    "orbital mechanics",
    "particle physics",
    "physics",
    "plasma",
    "planetary science",
    "planets",
    "planet",
    "pluto",
    "photon",
    "proton",
    "qubit",
    "quark",
    "quasar",
    "quantum",
    "quasiparticles",
    "robotics",
    "saturn",
    "selenodesy",
    "selenology",
    "singularity",
    "solar",
    "space",
    "spectrology",
    "spectroscopy",
    "stellar astronomy",
    "stereochemistry",
    "subatomic",
    "supernova",
    "supramolecular chemistry",
    "theory of relativity",
    "universe",
    "uranus",
    "uranography",
    "venus",
    "wormhole",
    "xenobiology",
    "zenography",
  ];

  const unwantedPhrases = [
    "album",
    "amazon",
    "annoying",
    "apparel",
    "arena",
    "art",
    "bomb",
    "baskets",
    "bedroom",
    "bulova",
    "graphics",
    "buy",
    "CEO",
    "cloudflare",
    "cogent",
    "combat",
    "comedian",
    "comedians",
    "comic",
    "comics",
    "coming-of-age",
    "commercial space",
    "condo",
    "crypto",
    "directed by",
    "discount",
    "disk space",
    "episode",
    "ESPN",
    "extravagant",
    "film",
    "game",
    "gameplay",
    "hiroshima",
    "horror",
    "investment",
    "IP",
    "katy",
    "keychain",
    "kia",
    "killed",
    "kitchen",
    "lego",
    "legions",
    "lion",
    "loan",
    "market",
    "marketing",
    "MCU",
    "meme",
    "movie",
    "nagasaki",
    "officers",
    "pepe",
    "personal space",
    "phone",
    "plot",
    "precious space",
    "prequel",
    "pricing",
    "prime",
    "PS5",
    "python",
    "Re:",
    "realty",
    "retail",
    "residents",
    "restaurant",
    "review",
    "reviewers",
    "sandbox",
    "save space",
    "shoot",
    "shooter",
    "show",
    "singer",
    "skyscraper",
    "skyscrapers",
    "smartwatch",
    "smartring",
    "smarthome",
    "space saver",
    "space saving",
    "stock",
    "stocks",
    "storage space",
    "street",
    "superman",
    "taking up space",
    "trailer",
    "wallet",
    "workspace",
    "xbox",
  ];

  // remove duplicates
  const seenTitles = new Set();
  const uniqueArticles = articlesShown.filter((article) => {
    const title = article.title.trim();
    if (!title || seenTitles.has(title)) return false;
    seenTitles.add(title);
    return true;
  });

  // helper function to escape special characters in phrases
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // filter articles by topic and unwanted keywords
  const filteredArticles = uniqueArticles.filter((article) => {
    const text = (
      article.title +
      " " +
      (article.description || "")
    ).toLowerCase();

    // check for unwanted phrases first
    const containsUnwanted = unwantedPhrases.some((phrase) => {
      // create a regex to match whole words only
      const regex = new RegExp(`\\b${escapeRegExp(phrase)}\\b`, "i");
      return regex.test(text);
    });
    if (containsUnwanted) {
      return false; // Exclude regardless of topic
    }

    const matchesTopic = topics.some((topic) => {
      const regex = new RegExp(`\\b${escapeRegExp(topic)}\\b`, "i");
      return regex.test(text);
    });
    if (!matchesTopic) {
      return false;
    }
    return true;
  });

  // infinite scroll effect
    useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting && 
          hasMore && 
          !loading && 
          !filteredArticles.length < 40
        ) {
          handleLoadMore();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasMore, loading, filteredArticles.length]);


  // loading and error states
  if (loadingScience || loadingSpace) return <p>Loading articles...</p>;
  if (errorScience || errorSpace) return <p>Error loading articles</p>;

  return (
    <>
      <div className="limitedFeedContainer">
        {filteredArticles.length === 0 && <p>No relevant articles found.</p>}

        {filteredArticles.map((article, index) => (
          <div className="newsCard p-3" key={index}>
            <p className="articleTitle">{article.title}</p>
            {article.urlToImage && (
              <img
                className="articleImage"
                src={article.urlToImage}
                alt={article.title}
                style={{ width: "40em", height: "auto" }}
              />
            )}
            <p className="articleDescription">{article.description}</p>

            {/* {hasToken ? (*/}
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <button
                onClick={() => handleArticleDetail(article.url)}
                className="btn btn-bd-primary btn-sm"
              >
                Read full article
              </button>
            </a>
            {/*  ) : (
                  <p>Register or Log in to read this article</p>
                )} */}
          </div>
        ))}
        <div ref={loadMoreRef} style={{ height: "1px" }} />

        {/* {hasMore && (
          <button onClick={handleLoadMore} className="btn btn-bd-primary">
            load more articles
          </button>
        )} */}
      </div>
    </>
  );
};

export default NewsFeed;
