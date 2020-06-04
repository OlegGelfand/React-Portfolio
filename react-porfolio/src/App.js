import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import NavTop from "./NavTop";
import Projects from "./Projects";

function App() {
  return (
    <div className="header">
      <NavTop />
      <Nav />
      <div className="App">
        <Main />
        <Projects />
      </div>
    </div>
  );
}

export default App;
