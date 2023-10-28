import React from "react";

import styles from "./Footer.module.scss";

import inst from "../../img/media/instagram.svg";
import linked from "../../img/media/linkedIn.svg";
import git from "../../img/media/gitHub.svg";

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.media}>
          <a href="https://github.com/DefRiZ">
            <img src={inst} alt="inst-link" />
          </a>
          <a href="https://github.com/DefRiZ">
            <img src={linked} alt="linkedIn-link" />
          </a>
          <a href="https://github.com/DefRiZ">
            <img src={git} alt="gitHub-link" />
          </a>
        </div>
        <div className={styles.numBlock}>
          <a className={styles.number} href="tel:+380671828578">
            +380671828578
          </a>
        </div>
        <span>&copy; Andrew</span>
      </div>
    </footer>
  );
};

export default Footer;
