import React from "react";

import styles from "./About.module.scss";

import { motion } from "framer-motion";

const About = () => {
  const onClickScroll = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  return (
    <section className={styles.root}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className={styles.container}
      >
        <h1>
          Hello, my name is <span>Andrew</span>
        </h1>
        <h2>and I want to become</h2>
        <h3>a junior frontend developer</h3>
        <button onClick={onClickScroll} className={styles.btn}>
          My skills
        </button>
      </motion.div>
    </section>
  );
};

export default About;
