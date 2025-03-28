import { DropdownMenu, RadioGroup } from "radix-ui";
import styles from "./DropdownSingle.module.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export interface IDropdownSingle {
  label?: string;
}

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

export default function DropdownSingle({ label }: IDropdownSingle) {
  const [option, setOption] = useState({
    value: undefined,
    text: null,
  });
  const [active, setActive] = useState(false);

  return (
    <>
      <DropdownMenu.Root
        onOpenChange={() => setActive((state) => !state)}
        open={active}
      >
        <DropdownMenu.Trigger asChild>
          <label>
            <p className={styles.label}>{label}</p>
            <select>
              <option value={option?.value} defaultChecked>
                {option.text}
              </option>
            </select>
          </label>
        </DropdownMenu.Trigger>
        <AnimatePresence>
          {active && (
            <DropdownMenu.Content asChild forceMount className={styles.content}>
              <motion.div
                variants={variants}
                exit="exit"
                animate="visible"
                initial="hidden"
                key="radio-dropdown"
              >
                <RadioGroup.Root className={styles.root}>
                  <div className={styles.wrapper}>
                    <RadioGroup.Item
                      value="1"
                      id="r1"
                      className={styles.radioItem}
                    >
                      <RadioGroup.Indicator className={styles.indicator} />
                    </RadioGroup.Item>
                    <label htmlFor="r1" className={styles.label}>
                      Россия
                    </label>
                  </div>
                </RadioGroup.Root>
              </motion.div>
            </DropdownMenu.Content>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    </>
  );
}
