import { PropsWithChildren } from "react";
import "./Button.css";

export type MaiButtonProps = { } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MaiButton = (props: PropsWithChildren<MaiButtonProps>) => {
  const {children, type = 'button'} = props;

  return <button type={type} className="mai-button" {...props}>{children}</button>
}