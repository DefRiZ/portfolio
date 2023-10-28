import React from "react";

import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.root}>
      <h1>Contacts</h1>
      <h2>Location</h2>
      <span>Ukraine, Kharkiv</span>
      <h2>Telegram</h2>
      <a href="tel:+380671828578">+380671828578</a>
      <h2>Email</h2>
      <a href="mailto:1andrewvakulenko@gmail.com">1andrewvakulenko@gmail.com</a>
    </div>
  );
};

export default Contacts;
