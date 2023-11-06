import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../projectArray/arrayProject";
import { projectElement } from "../../types";

import vercel from "../../img/links/vercel-logo-svgrepo-com.svg";
import github from "../../img/links/github-142-svgrepo-com.svg";
import styles from "./SingleProject.module.scss";

const SingleProject = () => {
  const { id } = useParams();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const project: projectElement = projects[id ? +id : 0];
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>{project.name}</h2>
        <div className={styles.imgBlock}>
          <img
            className={styles.image}
            src={project.url}
            alt="single-page project"
          />
        </div>
        <div className={styles.links}>
          {project.vercelDemo && (
            <Link className={styles.vercelBtn} to={project.vercelDemo}>
              <img src={vercel} alt="vercel-link" />
              <span>Project's demo</span>
            </Link>
          )}
          {project.gitHub && (
            <Link className={styles.githubBtn} to={project.gitHub}>
              <img src={github} alt="vercel-link" />
              <span>GitHub's code</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
