import React from "react";
import "../src/styles/main.scss";
import Nav from "./homePage/Nav";
import Categories from "./homePage/Categories";
import Home from "./homePage/Home";
import SmartWatch from "./recommended/SmartWatch";
import Ads from "./ads/Ads";
import NewCollec from "./newcollection/NewCollec";
import Trending from "./trending/Trending";

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
    </div>
  );
}

export default App;
