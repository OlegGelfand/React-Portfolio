import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import Main from "./Main";

function App() {
  const [projects, setProjects] = useState([]);
  const [projectIndex, setProjectIndex] = useState("");
  console.log("index from app", projectIndex);
  useEffect(() => {
    const makeAPICall = async () => {
      const projectURL =
        "https://spreadsheets.google.com/feeds/list/1ZgSrmkNKNaoR9jbnrp_he1qtHLmGJsq191HpCkT86sM/od6/public/values?alt=json";
      const resp = await fetch(`${projectURL}`);
      let json = await resp.json();
      setProjects(json);
    };
    makeAPICall();
  }, []);
  if (projects.feed) {
  }
  return (
    <div className="header">
      <UniversalContext.Provider
        value={{
          //anything i need for application
          projects,
          projectIndex,
          setProjectIndex,
        }}
      >
        <Main />
      </UniversalContext.Provider>
    </div>
  );
}

export default App;
export const UniversalContext = createContext();
