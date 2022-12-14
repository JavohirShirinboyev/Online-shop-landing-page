import React from "react";
import "../src/styles/main.scss";
import "./styles/responsive.scss";
import Nav from "./homePage/Nav";
import Categories from "./homePage/Categories";
import Home from "./homePage/Home";
import SmartWatch from "./recommended/SmartWatch";
import Ads from "./ads/Ads";
import NewCollec from "./newcollection/NewCollec";
import Trending from "./trending/Trending";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Categories />
      <Home />
      <SmartWatch />
      <Ads />
      <NewCollec />
      <Ads />
      <Trending />
      <Ads />
      <Footer />
    </div>
  );
}

export default App;
