import React from 'react';
import "./homePage/styles/main.scss";
import Nav from './homePage/Nav';
import Categories from "./homePage/Categories"
import Home from './homePage/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Categories />
      <Home />
    </div>
  );
}

export default App;
