import { PropsWithChildren } from "react";
import "./Button.css";

export type MaiButtonProps = { } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MaiButton = ({children, type = 'button'}: PropsWithChildren<MaiButtonProps>) => {
  return <button type={type} className="mai-button">{children}</button>
}