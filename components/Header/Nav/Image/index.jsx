import styles from "./style.module.scss";
import { opacity } from "../../anim";
import { motion } from "framer-motion";
import Image from "next/image";

function Images({ src, isActive }) {
  return (
    <motion.div
      className={styles.imageContainer}
      variants={opacity}
      animate={isActive ? "open" : "closed"}
    >
      <Image src={`/images/${src}`} fill={true} alt="img" />
    </motion.div>
  );
}

export default Images;
