import AdvantagesItem from "@/src/components/AdvantagesItem/AdvantagesItem";
import { advantagesList } from "./data";
import styles from "./AdvantagesSection.module.scss";

export default function AdvantagesSection() {
  return (
    <section className={styles.advantages}>
      {advantagesList.map((item) => (
        <AdvantagesItem icon={item.icon} text={item.text} key={item.text} />
      ))}
    </section>
  );
}
