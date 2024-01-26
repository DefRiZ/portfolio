import { motion } from "framer-motion";
import { textAnimation } from "../../animations";

import styles from "./About.module.scss";

const About = () => {
  const onClickScroll = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <motion.h1
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
          viewport={{ once: true }}
        >
          Hello, my name is <span>Andrew</span>
        </motion.h1>
        <motion.h2
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
          viewport={{ once: true }}
        >
          and I want to become
        </motion.h2>
        <motion.h3
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
          viewport={{ once: true }}
        >
          a junior frontend developer
        </motion.h3>
        <button onClick={onClickScroll} className={styles.btn}>
          My skills
        </button>
      </div>
    </section>
  );
};

export default About;
