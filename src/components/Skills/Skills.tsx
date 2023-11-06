import styles from "./Skills.module.scss";

import html from "../../img/skills/html-5-svgrepo-com.svg";
import css from "../../img/skills/css-3-svgrepo-com.svg";
import js from "../../img/skills/js-svgrepo-com.svg";
import ts from "../../img/skills/typescript-official-svgrepo-com.svg";
import react from "../../img/skills/react-svgrepo-com.svg";
import redux from "../../img/skills/redux-svgrepo-com.svg";
import sass from "../../img/skills/sass-svgrepo-com.svg";
import tailwind from "../../img/skills/tailwind-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <section className={styles.root}>
      <h2>Frontend</h2>
      <div className={styles.skills}>
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={ts} alt="" />
        <img src={react} alt="" />
        <img src={redux} alt="" />
        <img src={sass} alt="" />
        <img src={tailwind} alt="" />
      </div>
      <Link className={styles.btn} to="/projects">
        My projects
      </Link>
    </section>
  );
};

export default Skills;
