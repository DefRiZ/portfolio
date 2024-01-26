import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { imgAnimation } from "../../animations";

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

const images: string[] = [
  html,
  css,
  js,
  ts,
  react,
  next,
  redux,
  zustand,
  sass,
  tailwind,
];

const Skills = () => {
  return (
    <section className={styles.root}>
      <h2>Frontend</h2>
      <div className={styles.skills}>
        {images.map((el: string, i: number) => (
          <motion.img
            src={el}
            alt="skill"
            key={i}
            variants={imgAnimation}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ amount: 0.9, once: true }}
          />
        ))}
      </div>
      <Link className={styles.btn} to="/projects">
        My projects
      </Link>
    </section>
  );
};

export default Skills;
