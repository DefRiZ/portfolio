import React from "react";
import SliderItem from "../../components/SliderItem/SliderItem";

import styles from "./Projects.module.scss";

const Projects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1>Projects</h1>
        <SliderItem />
      </div>
    </section>
  );
};

export default Projects;
