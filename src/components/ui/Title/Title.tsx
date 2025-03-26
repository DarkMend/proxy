import { ReactNode } from "react";
import styles from "./Title.module.scss";
export default function Title({ children }: { children: ReactNode }) {
  return <h1 className={styles.text}>{children}</h1>;
}
