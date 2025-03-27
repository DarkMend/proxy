import IconText from "../IconText/IconText";
import styles from "./TariffCard.module.scss";
export default function TariffCard() {
  return (
    <div className={styles.tariffCard}>
      <div className={styles.title}></div>
      <div className={styles.main}></div>
      <div className={styles.action}></div>
    </div>
  );
}
