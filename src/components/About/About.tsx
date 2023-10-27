import React from "react";

import styles from "./About.module.scss";

const About = () => {
  const onClickScroll = () => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1>
          Hello, my name is <span>Andrew</span>
        </h1>
        <h2>and I want to become</h2>
        <h3>a junior frontend developer</h3>
        <button onClick={onClickScroll} className={styles.btn}>
          My skills
        </button>
      </div>
    </section>
  );
};

export default About;
