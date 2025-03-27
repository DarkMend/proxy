import IconText from "@/src/components/IconText/IconText";
import { advantagesList } from "./data";
import styles from "./AdvantagesSection.module.scss";

export default function AdvantagesSection() {
  return (
    <section className={styles.advantages}>
      {advantagesList.map((item) => (
        <IconText
          className={styles.advantagesItem}
          icon={item.icon}
          text={item.text}
          title={item.title}
          key={item.text}
        />
      ))}
    </section>
  );
}
