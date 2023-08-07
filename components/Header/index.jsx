"use client";

import Link from "next/link";
import styles from "./style.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import { useState } from "react";
import Nav from "./Nav";

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link href="/">THE STORE</Link>

        <div
          className={styles.el}
          onMouseDown={() => {
            setIsActive(!isActive);
          }}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            } `}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div variants={background} animate={isActive ? "enter" : "exit"} className={styles.backgroundComponent}></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}

export default Header;
