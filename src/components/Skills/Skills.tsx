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

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={styles.root}
    >
      <h2>Frontend</h2>
      <div className={styles.skills}>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={js} alt="js" />
        <img src={ts} alt="ts" />
        <img src={react} alt="react" />
        <img src={redux} alt="redux" />
        <img src={sass} alt="sass" />
        <img src={tailwind} alt="tailwind" />
      </div>
      <Link className={styles.btn} to="/projects">
        My projects
      </Link>
    </motion.section>
  );
};

export default Skills;
