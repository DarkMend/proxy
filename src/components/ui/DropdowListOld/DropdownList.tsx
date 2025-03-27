"use client";

import styles from "./Dropdownlist.module.scss";
import ArrowIcon from "@/src/assets/icons/arrow.svg";
import { ReactNode, useEffect, useRef, useState } from "react";
import cn from "classnames";
import DropdownListLink from "./DropdownListLink/DropdownListLink";

export interface IDropdownListLink {
  name: string;
  href: string;
}

export interface IDropdownList {
  text: string;
  items: IDropdownListLink[];
  icon?: ReactNode;
}

export default function DropdownList({ text, icon, items }: IDropdownList) {
  const [active, setActive] = useState(false);
  const dropdownListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownListRef.current &&
        !dropdownListRef.current.contains(e.target as Node)
      ) {
        setActive(false);
      } else {
        return;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdownList} ref={dropdownListRef}>
      <div
        className={styles.header}
        onClick={() => setActive((state) => !state)}
      >
        <div
          className={cn(styles.icon, {
            [styles.active]: !!icon,
          })}
        >
          {icon}
        </div>
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
        <DropdownListLink items={items} />
      </div>
    </div>
  );
}
