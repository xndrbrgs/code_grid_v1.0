import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import { useState } from "react";
import Images from "./Image";
import Footer from "./Footer";

function Nav() {
  const links = [
    {
      title: "Home",
      href: "/",
      src: "home.png",
    },
    {
      title: "Shop",
      href: "/shop",
      src: "shop.png",
    },
    {
      title: "About Us",
      href: "/about",
      src: "home.png",
    },
    {
      title: "Lookbook",
      href: "/lookbook",
      src: "lookbook.png",
    },
    {
      title: "Contact",
      href: "/contact",
      src: "contact.png",
    },
  ];

  const [hoveredLink, setHoveredLink] = useState({isActive: false, index: 0})

  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} hoveredLink={hoveredLink} setHoveredLink={setHoveredLink} />
          <Footer />
        </div>
        <Images src={links[hoveredLink.index].src} isActive={hoveredLink.isActive} />
      </div>
    </motion.div>
  );
}

export default Nav;
