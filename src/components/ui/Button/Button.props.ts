import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode,
    children: ReactNode,
    buttonType?: 'small' | 'default'
}