import { ReactNode } from "react";
import styles from "./IconLayout.module.scss";
import cn from "classnames";

export default function IconLayout({
  icon,
  theme,
}: {
  icon: ReactNode;
  theme?: "white";
}) {
  return (
    <div
      className={cn(styles.iconWrapper, {
        [styles.theme]: !!theme,
      })}
    >
      <div className={styles.icon}>{icon}</div>
    </div>
  );
}
