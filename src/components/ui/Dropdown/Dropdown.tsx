import SelectIcon from "@/src/assets/icons/arrow.svg";
import { Select } from "radix-ui";
import styles from "./Dropdown.module.scss";

export default function Dropdown() {
  return (
    <div className={styles.dropdown}>
      <Select.Root>
        <Select.Trigger className={styles.trigger}>
          <Select.Value placeholder="Куда" />
          <Select.Icon className={styles.icon}>
            <SelectIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content className={styles.content}>
          <Select.Viewport>
            <Select.Item value="apple">
              <Select.ItemText>Аpple</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item value="banana">
              <Select.ItemText>Banana</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item value="gbplf">
              <Select.ItemText>Orange</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
