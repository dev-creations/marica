import { PropsWithChildren } from "react";
import "./Button.css";

export type MaiButtonProps = { 
  /** 
   * Set disabled to true to make the button inactive. 
   * 
   * @default false
  */
  disabled?: boolean
 } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MaiButton = (props: PropsWithChildren<MaiButtonProps>) => {
  const {children, type = 'button'} = props;

  return <button type={type} className="mai-button" {...props}>{children}</button>
}