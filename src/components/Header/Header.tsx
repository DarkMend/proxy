import Link from "next/link";
import styles from "./Header.module.scss";
import Button from "../ui/Buttons/Button/Button";
import DropdownList from "../ui/DropdowList/DropdownList";
import { list } from "./data";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div></div>
          <nav className={styles.nav}>
            <DropdownList text="Виды прокси" items={list} />
            <Link href="#">Тарифы</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Cервисы</Link>
            <Link href="#">Разработчикам</Link>
            <Link href="#">RU</Link>
          </nav>
          <div className={styles.actions}>
            <Button buttonType="small">Войти</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
