"use client";

import styles from "./Button.module.scss";
import { IButton } from "./Button.props";
import cn from "classnames";

export default function Button({
  icon,
  children,
  buttonType = "default",
  ...props
}: IButton) {
  return (
    <button
      className={cn(styles.button, {
        [styles.small]: buttonType == "small",
      })}
      {...props}
    >
      <div className={styles.content}>
        <div
          className={cn(styles.svg, {
            [styles.active]: !!icon,
          })}
        >
          {icon}
        </div>
        <div className={styles.text}>{children}</div>
      </div>
    </button>
  );
}
