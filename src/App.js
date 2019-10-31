import React from "react";
import Header from "./components/Header/Header";
import Main from "./containers/MainContainer";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
