import Image from "next/image";
import styles from "./PaymentMethodsSection.module.scss";
import PaymentsImg from "@/public/img/payments.png";
import Title from "@/src/components/ui/Title/Title";
import PaymentMethodCard from "@/src/components/PaymentMethodCard/PaymentMethodCard";
import { paymentMethods } from "./data";

export default function PaymentsMethodsSection() {
  return (
    <section className={styles.payment}>
      <div className={styles.img}>
        <Image src={PaymentsImg} alt="png" />
      </div>
      <div className={styles.info}>
        <Title>Методы оплаты</Title>
        <div className={styles.paymentsMethods}>
          {paymentMethods.map((item) => (
            <PaymentMethodCard
              key={item.title}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
