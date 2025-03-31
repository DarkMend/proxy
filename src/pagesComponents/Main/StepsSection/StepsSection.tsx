import Title from "@/src/components/ui/Title/Title";
import styles from "./StepsSection.module.scss";
import { steps } from "./data";
import IconText from "@/src/components/IconText/IconText";
import Button from "@/src/components/ui/Buttons/Button/Button";
import ArrowIcon from "@/src/assets/icons/arrow-banner.svg";
import Image from "next/image";
import StepsImage from "@/public/img/steps.png";

export default function StepSection() {
  return (
    <section className={styles.stepsSection}>
      <Title>Купить прокси просто</Title>
      <div className={styles.steps}>
        {steps.map((item) => (
          <IconText
            text={item.text}
            icon={item.icon}
            title={item.title}
            key={item.title}
          />
        ))}
      </div>
      <div className={styles.info}>
        <div className={styles.text}>
          <div className={styles.head}>
            <h2>Моментальная выдача</h2>
            <p>
              Получите прокси мгновенно. Выберите удобный формат для выгрузки в
              личном кабинете.
            </p>
          </div>
          <Button icon={<ArrowIcon />} reverse={true} className={styles.button}>
            Попробовать
          </Button>
        </div>
        <div className={styles.img}>
          <Image src={StepsImage} alt="png" />
        </div>
      </div>
    </section>
  );
}
