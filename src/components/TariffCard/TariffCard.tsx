"use client";

import IconText from "../IconText/IconText";
import Button from "../ui/Buttons/Button/Button";
import styles from "./TariffCard.module.scss";
export default function TariffCard() {
  return (
    <div className={styles.tariffCard}>
      <div className={styles.title}>
        <IconText title="adasd" text="sada" icon={"ss"} />
      </div>
      <div className={styles.main}></div>
      <div className={styles.action}>
        <div className={styles.price}>40 ₽</div>
        <Button buttonType="small">Купить</Button>
      </div>
    </div>
  );
}
