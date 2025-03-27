import Title from "@/src/components/ui/Title/Title";
import styles from "./TariffSection.module.scss";
import TariffCard from "@/src/components/TariffCard/TariffCard";
export default function TariffSection() {
  return (
    <section className={styles.tariff}>
      <Title>Тарифы</Title>
      <div className={styles.tariffWrapper}>
        <TariffCard />
        <TariffCard />
        <TariffCard />
      </div>
    </section>
  );
}
