"use client";

import { ReactNode } from "react";
import IconText from "../IconText/IconText";
import Button from "../ui/Buttons/Button/Button";
import styles from "./TariffCard.module.scss";
import DropdownSingle from "../ui/DropdownSingle/DropdownSingle";

export interface ITariffCard {
  data: {
    title: {
      icon: ReactNode;
      title: string;
      text: string;
    };
    price: number;
  };
}

export default function TariffCard({ data }: ITariffCard) {
  return (
    <div className={styles.tariffCard}>
      <div className={styles.title}>
        <IconText
          title={data.title.title}
          text={data.title.text}
          icon={data.title.icon}
        />
      </div>
      <div className={styles.main}>
        <DropdownSingle label="Страна" />
        <div className={styles.mainWrapper}>
          <DropdownSingle label="Период" />
          <DropdownSingle label="Количество" />
        </div>
        <DropdownSingle label="Скорость" />
      </div>
      <div className={styles.action}>
        <div className={styles.price}>{data.price} ₽</div>
        <Button buttonType="small">Купить</Button>
      </div>
    </div>
  );
}
