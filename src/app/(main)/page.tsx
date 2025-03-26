import styles from "./main.module.scss";
import RocketImage from "../../../public/img/block1.svg";
import Button from "@/components/ui/Buttons/Button/Button";
import BannerArrowIcon from "@/public/arrow-banner.svg";
import ImagePng from "@/public/switch.svg";
import AdvantagesItem from "@/components/AdvantagesItem/AdvantagesItem";
import { advantagesList } from "./data";
import Title from "@/components/ui/Title/Title";

export default function Page() {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.bannerWrapper}>
          <div className={styles.bannerInfo}>
            <div className={styles.bannerInfoH1}>
              <h1>
                Качественные
                <div className={styles.switch}>
                  <ImagePng />
                </div>
              </h1>
              <h1>и анонимные прокси</h1>
            </div>
            <div className={styles.bannerInfoParagraph}>
              У нас можно купить высокоскоростные прокси socks5 и https
            </div>
            <Button
              icon={<BannerArrowIcon />}
              reverse={true}
              className={styles.bannerButton}
            >
              Купить прокси
            </Button>
          </div>
          <div className={styles.bannerImage}>
            <RocketImage />
          </div>
        </div>
      </section>
      <section className={styles.advantages}>
        {advantagesList.map((item) => (
          <AdvantagesItem icon={item.icon} text={item.text} key={item.text} />
        ))}
      </section>
      <section className={styles.tariff}>
        <Title>Тарифы</Title>
      </section>
    </>
  );
}
