import React, { useState } from "react";
import WelcomeAlert from "../components/WelcomeAlert";
import Feeds from "./Feeds";
import "../styles/home.css";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <WelcomeAlert />
      <Feeds />
    </>
  );
};

export default Home;
