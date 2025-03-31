import { DropdownMenu, RadioGroup } from "radix-ui";
import styles from "./DropdownSingle.module.scss";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SelectIcon from "@/src/assets/icons/arrow.svg";

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
  const triggerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState("auto");

  useEffect(() => {
    if (triggerRef.current) {
      setWidth(`${triggerRef.current.offsetWidth}px`);
    }
  }, [active]);

  return (
    <>
      <DropdownMenu.Root
        onOpenChange={() => setActive((state) => !state)}
        open={active}
      >
        <DropdownMenu.Trigger asChild>
          <div className={styles.triggerWrapper}>
            {label && <p className={styles.triggerName}>{label}</p>}
            <div className={styles.trigger} ref={triggerRef}>
              <p className={styles.label}>{label}</p>
              <SelectIcon />
            </div>
          </div>
        </DropdownMenu.Trigger>
        <AnimatePresence>
          {active && (
            <DropdownMenu.Content
              asChild
              forceMount
              className={styles.content}
              style={{ width: width }}
            >
              <motion.div
                variants={variants}
                exit="exit"
                animate="visible"
                initial="hidden"
                key="radio-dropdown"
              >
                <RadioGroup.Root className={styles.root}>
                  <label className={styles.wrapper} htmlFor="r1">
                    <RadioGroup.Item
                      value="1"
                      id="r1"
                      className={styles.radioItem}
                    >
                      <RadioGroup.Indicator className={styles.indicator} />
                    </RadioGroup.Item>
                    <p className={styles.label}>Россия</p>
                  </label>
                </RadioGroup.Root>
              </motion.div>
            </DropdownMenu.Content>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    </>
  );
}
