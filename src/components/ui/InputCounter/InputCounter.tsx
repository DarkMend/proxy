import styles from "./InputCounter.module.scss";
import MinusIcon from "@/src/assets/icons/minus.svg";
import PlusIcon from "@/src/assets/icons/plus.svg";

export interface IInputCounter {
  label?: string;
}

export default function InputCounter({ label }: IInputCounter) {
  return (
    <div className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.counter}>
        <button className={styles.button}>
          <MinusIcon />
        </button>
        <div className={styles.count}>2</div>
        <button className={styles.button}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}
