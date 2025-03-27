"use client";

import SelectIcon from "@/src/assets/icons/arrow.svg";
import { DropdownMenu } from "radix-ui";
import styles from "./Dropdown.module.scss";
import { useState } from "react";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

export default function Dropdown() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((state) => !state);
  };

  return (
    <div className={styles.dropdown}>
      <DropdownMenu.Root onOpenChange={toggle} open={active}>
        <DropdownMenu.Trigger asChild>
          <button className={styles.trigger}>
            <p>Текст</p>
            <div
              className={cn(styles.icon, {
                [styles.active]: active,
              })}
            >
              <SelectIcon />
            </div>
          </button>
        </DropdownMenu.Trigger>
        <AnimatePresence>
          {active && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate={active ? "visible" : "hidden"}
            >
              <DropdownMenu.Content className={styles.content}>
                <DropdownMenu.Item className={styles.item}>
                  1111s
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </motion.div>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    </div>
  );
}
