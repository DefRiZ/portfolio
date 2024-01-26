import { motion } from "framer-motion";
import { textAnimation, textAnimation2 } from "../../animations";

import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.root}>
      <motion.h1
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
        viewport={{ once: true }}
      >
        Contacts
      </motion.h1>
      <motion.h2
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        custom={0.3}
        transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
        viewport={{ once: true }}
      >
        Location
      </motion.h2>
      <motion.span
        variants={textAnimation2}
        initial="hidden"
        whileInView="visible"
        custom={0.4}
        transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
        viewport={{ once: true }}
      >
        Ukraine, Kharkiv
      </motion.span>
      <motion.h2
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        custom={0.5}
        transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
        viewport={{ once: true }}
      >
        Telegram
      </motion.h2>
      <motion.a
        href="tel:+380671828578"
        variants={textAnimation2}
        initial="hidden"
        whileInView="visible"
        custom={0.6}
        transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
        viewport={{ once: true }}
      >
        +380671828578
      </motion.a>
      <motion.h2
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        custom={0.7}
        transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
        viewport={{ once: true }}
      >
        Email
      </motion.h2>
      <motion.a
        href="mailto:1andrewvakulenko@gmail.com"
        variants={textAnimation2}
        initial="hidden"
        whileInView="visible"
        custom={0.8}
        transition={{ duration: 0.4, ease: [1, 1, 1, 1] }}
        viewport={{ once: true }}
      >
        1andrewvakulenko@gmail.com
      </motion.a>
    </div>
  );
};

export default Contacts;
