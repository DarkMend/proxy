"use client";

import SelectIcon from "@/src/assets/icons/arrow.svg";
import { DropdownMenu } from "radix-ui";
import styles from "./Dropdown.module.scss";
import { useState } from "react";
import cn from "classnames";

export default function Dropdown() {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.dropdown}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div
            className={styles.trigger}
            onClick={() => setActive((state) => !state)}
          >
            <p>Текст</p>
            <div
              className={cn(styles.icon, {
                [styles.active]: active,
              })}
            >
              <SelectIcon />
            </div>
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className={styles.content}>
          <DropdownMenu.Item className={styles.item}>1111s</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
