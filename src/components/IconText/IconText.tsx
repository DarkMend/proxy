import { HTMLAttributes, ReactNode } from "react";
import styles from "./IconText.module.scss";
import IconLayout from "../ui/IconLayout/IconLayout";
import cn from "classnames";

export interface IIconText extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  text: string;
  title?: string;
}

export default function IconText({
  icon,
  text,
  title,
  className,
  ...props
}: IIconText) {
  return (
    <div className={cn(styles.iconText, className)} {...props}>
      <IconLayout icon={icon} />
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        <p
          className={cn(styles.text, {
            [styles.small]: !!title,
          })}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
