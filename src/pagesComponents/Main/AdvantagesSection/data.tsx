import RocketIcon from "@/src/assets/icons/rocket.svg";
import HttpIcon from "@/src/assets/icons/http.svg";
import CheckIcon from "@/src/assets/icons/check.svg";
import ApiIcon from "@/src/assets/icons/api.svg";
import { ReactNode } from "react";

export type advantagesListType = {
  text: string;
  icon: ReactNode;
  title?: string;
};

export const advantagesList: advantagesListType[] = [
  {
    text: "Высокая скорость",
    icon: <RocketIcon />,
  },
  {
    text: "HTTP и Socks5",
    icon: <HttpIcon />,
  },
  {
    text: "Покупка от 1 ip",
    icon: <CheckIcon />,
  },
  {
    text: "API для разработчиков",
    icon: <ApiIcon />,
  },
];
