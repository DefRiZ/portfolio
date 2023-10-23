import React from "react";

import styles from "./Header.module.scss";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Link className={styles.title} to="#">
          My portfolio
        </Link>
        <ul className={styles.list}>
          <li>
            <NavLink className={styles.link} to="#">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="#">
              My projects
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="#">
              My contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
