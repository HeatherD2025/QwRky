import React, { useState, useEffect, useRef } from "react";
import { useGetLatestNewsQuery } from "../../features/feeds/currentsApi.js";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/index.css";
import "../../styles/feeds.css";

const TESTNormalNewsFeed = () => {
      // // state declarations
//   const [page, setPage] = useState(1);
  const [articlesShown, setArticlesShown] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const loadMoreRef = useRef(null);

  const {
    data: currentsData,
    isLoading: loadingCurrents,
    error: errorCurrents,
  } = useGetLatestNewsQuery({ });

  const handleArticleDetail = (articleUrl) => {
    navigate(`/article/${encodeURIComponent(articleUrl)}`);
    console.log("attempting to navigate");
  };

    // useEffect updates articlesShown when data changes
  useEffect(() => {
    const existingTitles = new Set(articlesShown.map((a) => a.title));
    const newArticles = [
      ...(currentsData?.articles || []),
    ];

    const uniqueNewArticles = newArticles.filter(
      (article) => !existingTitles.has(article.title),
    );

    if (uniqueNewArticles.length > 0) {
      setArticlesShown((prev) => [...prev, ...uniqueNewArticles]);
    }

    if (
      currentsData &&
      currentsData.results?.length < 10
    ) {
      setHasMore(false);
    }

    setIsLoading(false);
  }, [currentsData]);

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


  // remove duplicates
  const seenTitles = new Set();
  const uniqueArticles = articlesShown.filter((article) => {
    const title = article.title.trim();
    if (!title || seenTitles.has(title)) return false;
    seenTitles.add(title);
    return true;
  });

  // filter articles by topic and unwanted keywords
  const filteredArticles = uniqueArticles.filter((article) => {
    const text = (
      article.title +
      " " +
      (article.description || "")
    ).toLowerCase();


    const matchesTopic = topics.some((topic) => {
      const regex = new RegExp(`\\b${escapeRegExp(topic)}\\b`, "i");
      return regex.test(text);
    });
    if (!matchesTopic) {
      return false;
    }
    return true;
  });

  if (loadingCurrents) return <p>Loading articles...</p>;
  if (errorCurrents) return <p>Error loading articles</p>;

   return (
      <>
        {filteredArticles.length === 0 && <p>No relevant articles found.</p>}
  
        {filteredArticles.map((article, index) => (
          <ArticleCard
            key={index}
            article={article}
            onRead={handleArticleDetail}
          />
        ))}
        <div ref={loadMoreRef} style={{ height: "1px" }} />
  
        {hasMore && (
          <button onClick={handleLoadMore} className="btn btn-bd-primary">
            load more articles
          </button>
        )}
      </>
    );
  };
  
  export default TESTNormalNewsFeed;
  
