import { HTMLAttributes, ReactNode } from "react";
import styles from "./IconText.module.scss";
import IconLayout from "../ui/IconLayout/IconLayout";
import cn from "classnames";

export interface IIconText extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  text?: string;
  title?: string;
  colorText: string;
  theme?: "white";
}

export default function IconText({
  icon,
  text,
  title,
  className,
  colorText,
  theme,
  ...props
}: IIconText) {
  return (
    <div
      className={cn(styles.iconText, className, {
        [styles.theme]: !!theme,
      })}
      {...props}
    >
      <IconLayout icon={icon} theme={theme} />
      <div className={styles.wrapper}>
        <div className={styles.title} style={{ color: colorText }}>
          {title}
        </div>
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
