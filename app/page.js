import Image from "next/image";
import styles from "./page.module.scss";
import {
  Floating1,
  Floating2,
  Floating3,
  Floating4,
  Floating5,
  Floating6,
  Floating7,
  Floating8,
} from "./data.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.plane}></div>
    </main>
  );
}
