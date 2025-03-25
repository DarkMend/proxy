"use client";

import styles from "./Dropdownlist.module.scss";
import ArrowIcon from "../../../../public/arrow.svg";
import { useState } from "react";
import cn from "classnames";

export interface IDropdownList {
  text: string;
  items: string[];
}

export default function DropdownList({ text, items }: IDropdownList) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.dropdownList}>
      <div
        className={styles.header}
        onClick={() => setActive((state) => !state)}
      >
        <div className={styles.text}>{text}</div>
        <div
          className={cn(styles.arrow, {
            [styles.active]: active,
          })}
        >
          <ArrowIcon />
        </div>
      </div>
      <div
        className={cn(styles.items, {
          [styles.active]: active,
        })}
      >
        {items.map((el) => (
          <div className={styles.item} key={el}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
