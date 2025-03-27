import styles from "./BannerSection.module.scss";
import RocketImage from "@/public/img/block1.svg";
import BannerArrowIcon from "@/src/assets/icons/arrow-banner.svg";
import ImagePng from "@/src/assets/icons/switch.svg";
import Button from "@/src/components/ui/Buttons/Button/Button";

export default function BannerSection() {
  return (
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
  );
}
