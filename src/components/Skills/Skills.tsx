import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={styles.root}>
      <h2>Frontend</h2>
      <p className={styles.skills}>
        JavaScript, TypeScript, ReactJS, Redux Toolkit, HTML, CSS, NPM,
        TailwindCSS, StyledComponents
      </p>
    </section>
  );
};

export default Skills;
