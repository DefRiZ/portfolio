import React from "react";

import styles from "./Projects.module.scss";

import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { projectElement } from "../../types";
import { projects } from "../../projectArray/arrayProject";

const Projects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1>Projects</h1>
        <ul className={styles.projects}>
          {projects.map((project: projectElement) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
