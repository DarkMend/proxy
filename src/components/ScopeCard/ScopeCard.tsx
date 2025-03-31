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
  theme?: "white";
}

export default function ScopeCard({
  iconText,
  text,
  img,
  ul,
  column = false,
  theme,
  className,
}: IScopeCard) {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.column]: column,
        [styles.theme]: !!theme,
      })}
    >
      <div className={styles.wrapper}>
        <IconText
          icon={iconText.icon}
          title={iconText.title}
          colorText="black"
          theme={theme}
        />
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
