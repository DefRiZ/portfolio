import React from "react";

import styles from "./Header.module.scss";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Link className={styles.title} to="/">
          My portfolio
        </Link>
        <ul className={styles.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.linkActive} ${styles.link}`
                  : `${styles.link}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.linkActive} ${styles.link}`
                  : `${styles.link}`
              }
              to="/projects"
            >
              My projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.linkActive} ${styles.link}`
                  : `${styles.link}`
              }
              to="/contacts"
            >
              My contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
