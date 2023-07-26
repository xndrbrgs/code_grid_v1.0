import styles from "./style.module.scss";
import Link from "next/link";
import { Londrina_Sketch } from "next/font/google";

function Body({ links }) {
  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;

        return (
          <Link href={href} key={`l_${index}`}>
            <p>{title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Body;
