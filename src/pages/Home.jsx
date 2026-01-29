import React from "react";
import { useState } from "react";
import WelcomeAlert from "../components/WelcomeAlert";
import Feeds from "./Feeds";
import "../styles/home.css";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="animated-gradient">
      <WelcomeAlert />
      <Feeds />
    </div>
  );
};

export default Home;
