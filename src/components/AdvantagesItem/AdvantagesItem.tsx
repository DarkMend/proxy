import { ReactNode } from "react";
import styles from "./AdvantagesItem.module.scss";
import IconLayout from "../ui/IconLayout/IconLayout";

export interface IAdvantagesItem {
  icon: ReactNode;
  text: string;
}

export default function AdvantagesItem({ icon, text }: IAdvantagesItem) {
  return (
    <div className={styles.advantagesItem}>
      <IconLayout icon={icon} />
      <div className={styles.text}>{text}</div>
    </div>
  );
}
