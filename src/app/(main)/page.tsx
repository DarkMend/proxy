import styles from "./main.module.scss";
import Title from "@/src/components/ui/Title/Title";
import BannerSection from "@/src/pagesComponents/Main/BannerSection/BannerSection";
import AdvantagesSection from "@/src/pagesComponents/Main/AdvantagesSection/AdvantagesSection";

export default function Page() {
  return (
    <>
      <BannerSection />
      <AdvantagesSection />
      <section className={styles.tariff}>
        <Title>Тарифы</Title>
      </section>
    </>
  );
}
