import React, { useState } from "react";
import WelcomeAlert from "../components/WelcomeAlert";
import Feeds from "./Feeds";
import "../styles/home.css";
import NewsDataTest from "../components/NewsDataTest.jsx";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <WelcomeAlert />
      <Feeds />
      <NewsDataTest />
    </>
  );
};

export default Home;
