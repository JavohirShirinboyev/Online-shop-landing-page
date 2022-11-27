import React from 'react';
import "./homePage/styles/main.scss";
import Nav from './homePage/Nav';
import Categories from "./homePage/Categories"

function App() {
  return (
    <div className="App">
      <Nav />
      <Categories />
    </div>
  );
}

export default App;
