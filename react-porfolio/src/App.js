import React, {Component} from "react";
// import logo from './logo.svg';
import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import NavTop from "./NavTop";
import Projects from "./Projects";
// import Chart from "./Chart";
import About from "./About";
// import Chart2 from "./Chart2";

function App() {

  return (
    <div className="header">
      <NavTop />
      <Nav />
      <div className="App">
        <Main />
        <Projects />
        {/* <Chart /> */}
        {/* <Chart2 /> */}
        <About />
      </div>
    </div>
  );
}


export default App;
