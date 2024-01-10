import React from "react";

import styles from "./Projects.module.scss";

import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { projectElement } from "../../types";
import { projects } from "../../projectArray/arrayProject";
import { motion } from "framer-motion";
import SliderItem from "../../components/SliderItem/SliderItem";

const Projects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.root}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className={styles.container}
      >
        <h1>Projects</h1>
        <SliderItem />
        {/* <ul className={styles.projects}>
          {projects.map((project: projectElement) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </ul> */}
      </motion.div>
    </section>
  );
};

export default Projects;
