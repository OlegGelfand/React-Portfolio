import React, {createContext, useState,useEffect} from "react";
import "./App.css";
// import Resume from "./Resume";
// import About from "./About";
// import Footer from "./Footer";
// import ProjectListItem from "./ProjectListItem";
import Main from "./Main";
// import Skills from "./Skills";
// import { Link } from "react-router";
// import { Switch, Route } from "react-router";

function App() {

  const [projects, setProjects] = useState([]);
  const [projectIndex,setProjectIndex]=useState("");


  useEffect(() => {
    const makeAPICall = async () => {
      // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const projectURL = "https://spreadsheets.google.com/feeds/list/1ZgSrmkNKNaoR9jbnrp_he1qtHLmGJsq191HpCkT86sM/od6/public/values?alt=json";
      const resp = await fetch(`${projectURL}`);
      // console.log("useEffect - resp", resp);
      let json = await resp.json();
      setProjects(json);
      // console.log(json);
    };
    makeAPICall();
  }, []);
if(projects.feed){
// console.log('pro',projects.feed.entry[3);
}

  return (
    
    <div className="header">
      <UniversalContext.Provider value={
        {
          //anything i need for application
          projects,
          projectIndex,
          setProjectIndex
        }
      }
      ><Main /></UniversalContext.Provider>
    </div>
  );
}

export default App;
export const UniversalContext=createContext();