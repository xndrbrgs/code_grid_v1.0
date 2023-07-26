"use client";

import Link from "next/link";
import styles from "./style.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { opacity } from "./anim";
import { useState } from "react";
import Nav from "./Nav";

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link href="/">LOGO GOES HERE</Link>

        <div
          className={styles.el}
          onMouseDown={() => {
            setIsActive(!isActive);
          }}
        >
          <div className={styles.burger}></div>
          <div className={styles.label}>
            <motion.p variants={opacity} animate={isActive ? "closed" : "open"}>
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={!isActive ? "closed" : "open"}
            >
              Close
            </motion.p>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}

export default Header;
