import styles from "./main.module.scss";
import RocketImage from "../../../public/img/block1.svg";
import Button from "@/components/ui/Buttons/Button/Button";
import BannerArrowIcon from "@/public/arrow-banner.svg";

export default function Page() {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.bannerWrapper}>
          <div className={styles.bannerInfo}>
            <div className={styles.bannerInfoH1}></div>
            <div className={styles.bannerInfoParagraph}></div>
            <Button icon={<BannerArrowIcon />} reverse={true}>
              Купить прокси
            </Button>
          </div>
          <div className={styles.bannerImage}>
            <RocketImage />
          </div>
        </div>
      </section>
    </>
  );
}
