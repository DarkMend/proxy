"use client";

import styles from "./Button.module.scss";
import { IButton } from "./Button.props";
import cn from "classnames";

export default function Button({
  icon,
  children,
  buttonType = "default",
  reverse = false,
  className,
  ...props
}: IButton) {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.small]: buttonType == "small",
      })}
      {...props}
    >
      <div
        className={cn(styles.content, {
          [styles.reverse]: reverse,
        })}
      >
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
