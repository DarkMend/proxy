import Title from "@/src/components/ui/Title/Title";
import styles from "./TariffSection.module.scss";
import TariffCard from "@/src/components/TariffCard/TariffCard";
import { tariffCards } from "./data";
export default function TariffSection() {
  return (
    <section className={styles.tariff}>
      <Title>Тарифы</Title>
      <div className={styles.tariffWrapper}>
        {tariffCards.map((item) => (
          <TariffCard data={item} key={item.title.title} />
        ))}
      </div>
    </section>
  );
}
