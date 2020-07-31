import React, { useContext } from "react";
import { UniversalContext } from "./App";
import Navtop from "./NavTop";
import ProjectFooter from "./ProjectFooter";

function ProjectDescription(props) {
  const projectContext = useContext(UniversalContext);
  const data = projectContext.projects;
  console.log("props from details", props.match.params.title);
  console.log("pro context", projectContext.projects);
  const titleParam = props.match.params.title;

  if (projectContext.projects.feed !== undefined) {
    var title = data.feed.entry[Number(titleParam)].gsx$title.$t;
    var image = data.feed.entry[Number(titleParam)].gsx$image.$t;
    var url = data.feed.entry[Number(titleParam)].gsx$url.$t;
    var description = data.feed.entry[Number(titleParam)].gsx$description.$t;
  }
  console.log("pro context", projectContext.projectIndex);
  return (
    <div className="main-details">
      <Navtop />
      <div className="project-details">
      <div className="project-detail">
        <div className="pic">
          <h1><a className="url" href={url}>Click here to go to source</a></h1>

          </div>
          <div className="pic">
        <div className="details-heading">{title}</div>
        <img alt="10" className="images" src={image}></img>
        <div className="details-description">{description}</div>
        </div>
      </div>

      <ProjectFooter />
      </div>
    </div>
  );
}

export default ProjectDescription;
