import styles from "./style.module.scss";
import { translate } from "../../anim";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
        >
          <span>Inspired by: </span>Studio Lumino
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
        >
          <span>Typography: </span>Google Fonts
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
        >
          <span>Images: </span>FREEPIK, ENVATO
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
        >
          PRIVACY POLICY
        </motion.li>
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
        >
          Terms and Conditions
        </motion.li>
      </ul>
    </div>
  );
}

export default Footer;
