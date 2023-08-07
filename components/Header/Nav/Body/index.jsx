import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { translate, blur } from "../../anim";

function Body({ links, hoveredLink, setHoveredLink }) {
  const getChar = (title) => {
    let chars = [];
    title.split("").forEach((char, index) => {
      chars.push(
        <motion.span
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          custom={[index * 0.02, (title.length - index) * 0.01]}
          key={`c_${index}`}
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;

        return (
          <Link
            onMouseOver={() => {
              setHoveredLink({ isActive: true, index });
            }}
            onMouseLeave={() => {
              setHoveredLink({ isActive: false, index });
            }}
            href={href}
            key={`l_${index}`}
          >
            <motion.p
              variants={blur}
              initial="initial"
              animate={
                hoveredLink.isActive && hoveredLink.index != index
                  ? "open"
                  : "closed"
              }
            >
              {getChar(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}

export default Body;
