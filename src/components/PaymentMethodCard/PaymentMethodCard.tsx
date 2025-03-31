import { ReactNode } from "react";
import styles from "./PaymentMethodCard.module.scss";

export interface IPaymethodMethodCard {
  icon: ReactNode;
  title: string;
  text: string;
}

export default function PaymentMethodCard({
  icon,
  title,
  text,
}: IPaymethodMethodCard) {
  return (
    <div className={styles.payment}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.icon}></div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
