import React, { useContext } from "react";
import { UniversalContext } from "./App";
import ProjectListItem from "./ProjectListItem";

function ProjectList() {
  const projectContext = useContext(UniversalContext);
  const data = projectContext.projects;
  let renderProjects = this;

  if (data.feed) {
    renderProjects = data.feed.entry.map((e, index) => {
      return (
        <ProjectListItem element={e} key={index} index={index}/>
      );
    });
  }
  return (
    <div className="haha">
      <div className="cookies">{renderProjects}</div>
    </div>
  );
}
export default ProjectList;
