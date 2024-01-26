import React from "react";
import { projectElement } from "../../types";
import { Link } from "react-router-dom";

import styles from "./ProjectItem.module.scss";

const ProjectItem: React.FC<projectElement> = ({ id, name, url }) => {
  return (
    <div className={styles.root}>
      <Link className={styles.link} to={`/projects/${id}`}>
        <img className={styles.image} src={url} alt="portfolio-project" />
      </Link>
    </div>
  );
};

export default ProjectItem;
