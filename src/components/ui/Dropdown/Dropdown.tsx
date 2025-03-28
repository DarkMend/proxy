"use client";

import SelectIcon from "@/src/assets/icons/arrow.svg";
import { DropdownMenu } from "radix-ui";
import styles from "./Dropdown.module.scss";
import { useState } from "react";
import cn from "classnames";
import { AnimatePresence, motion } from "motion/react";

const variants = {
  hidden: {
    opacity: 0,
    transform: "translateY(-10px)",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transform: "translateY(-10px)",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export interface IDropdownList {
  name: string;
  href: string;
}

export interface IDropdown {
  title: string;
  items?: IDropdownList[];
}

export default function Dropdown({ title, items }: IDropdown) {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((state) => !state);
  };

  return (
    <div className={styles.dropdown}>
      <DropdownMenu.Root onOpenChange={toggle} open={active}>
        <DropdownMenu.Trigger asChild>
          <button className={styles.trigger}>
            <p>{title}</p>
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
            <DropdownMenu.Content className={styles.content} asChild forceMount>
              <motion.div
                key="dropdown-content"
                initial="hidden"
                animate="visible"
                variants={variants}
                exit="exit"
              >
                {items?.map((item) => (
                  <DropdownMenu.Item className={styles.item} key={item.name}>
                    {item.name}
                  </DropdownMenu.Item>
                ))}
              </motion.div>
            </DropdownMenu.Content>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    </div>
  );
}
