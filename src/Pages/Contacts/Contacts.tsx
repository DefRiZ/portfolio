import React from "react";

import styles from "./Contacts.module.scss";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={styles.root}
    >
      <h1>Contacts</h1>
      <h2>Location</h2>
      <span>Ukraine, Kharkiv</span>
      <h2>Telegram</h2>
      <a href="tel:+380671828578">+380671828578</a>
      <h2>Email</h2>
      <a href="mailto:1andrewvakulenko@gmail.com">1andrewvakulenko@gmail.com</a>
    </motion.div>
  );
};

export default Contacts;
