import Title from "@/src/components/ui/Title/Title";
import styles from "./TariffSection.module.scss";
export default function TariffSection() {
  return (
    <section className={styles.tariff}>
      <Title>Тарифы</Title>
      <div className={styles.tariffWrapper}></div>
    </section>
  );
}
