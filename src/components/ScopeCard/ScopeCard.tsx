import { HTMLAttributes, ReactNode } from "react";
import IconText from "../IconText/IconText";
import styles from "./ScopeCard.module.scss";
import cn from "classnames";

export interface IScopeCard extends HTMLAttributes<HTMLDivElement> {
  iconText: {
    title: string;
    icon: ReactNode;
  };
  text: string;
  ul?: string[];
  img?: ReactNode;
  column?: boolean;
}

export default function ScopeCard({
  iconText,
  text,
  img,
  ul,
  column = false,
  className,
}: IScopeCard) {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.column]: column,
      })}
    >
      <div className={styles.wrapper}>
        <IconText icon={iconText.icon} text={iconText.title} />
        <p className={styles.text}>{text}</p>
        {ul && (
          <ul>
            {ul.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.img}>{img}</div>
    </div>
  );
}
