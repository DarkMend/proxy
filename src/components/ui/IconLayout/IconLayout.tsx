import { ReactNode } from "react";
import styles from "./IconLayout.module.scss";
export default function IconLayout({ icon }: { icon: ReactNode }) {
  return (
    <div className={styles.iconWrapper}>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
}
