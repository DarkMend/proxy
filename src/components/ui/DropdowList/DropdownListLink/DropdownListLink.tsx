import Link from "next/link";
import { IDropdownListLink } from "../DropdownList";
import styles from "./DropdownListLink.module.scss";
export default function DropdownListLink({
  items,
}: {
  items: IDropdownListLink[];
}) {
  return (
    <div className={styles.list}>
      {items.map((el) => (
        <Link href={el.href} key={el.name}>
          <div className={styles.item}>{el.name}</div>
        </Link>
      ))}
    </div>
  );
}
