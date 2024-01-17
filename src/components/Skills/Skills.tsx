import styles from "./Skills.module.scss";

import html from "../../img/skills/html-5-svgrepo-com.svg";
import css from "../../img/skills/css-3-svgrepo-com.svg";
import js from "../../img/skills/js-svgrepo-com.svg";
import ts from "../../img/skills/typescript-official-svgrepo-com.svg";
import react from "../../img/skills/react-svgrepo-com.svg";
import next from "../../img/skills/nextjs-icon-svgrepo-com.svg";
import redux from "../../img/skills/redux-svgrepo-com.svg";
import zustand from "../../img/skills/zustand.png";
import sass from "../../img/skills/sass-svgrepo-com.svg";
import tailwind from "../../img/skills/tailwind-svgrepo-com.svg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className={styles.root}>
      <h2>Frontend</h2>
      <div className={styles.skills}>
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          src={html}
          alt="html"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          src={css}
          alt="css"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          src={js}
          alt="js"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          src={ts}
          alt="ts"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          src={react}
          alt="react"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          src={next}
          alt="next"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          src={redux}
          alt="redux"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className={styles.zustand}
          src={zustand}
          alt="zustand"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          src={sass}
          alt="sass"
        />
        <motion.img
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          src={tailwind}
          alt="tailwind"
        />
      </div>
      <Link className={styles.btn} to="/projects">
        My projects
      </Link>
    </section>
  );
};

export default Skills;
