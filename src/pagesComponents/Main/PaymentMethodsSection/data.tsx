import BankCardIcon from "@/src/assets/icons/bank-card.svg";
import SpbIcon from "@/src/assets/icons/spb.svg";
import CreptaIcon from "@/src/assets/icons/crepta.svg";

export const paymentMethods = [
  {
    title: "Банковские карты",
    icon: <BankCardIcon />,
    text: "Mastercard, VISA, МИР",
  },
  {
    title: "СБП",
    icon: <SpbIcon />,
    text: "Система быстрых платежей",
  },
  {
    title: "Криптовалюта",
    icon: <CreptaIcon />,
    text: "Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC) и другие",
  },
];
