import { PropsWithChildren } from "react";
import "./Button.css";

export type MaiButtonVariants = "primary" | "success";

export type MaiButtonProps = { 
  /** 
   * Set disabled to true to make the button inactive. 
   * 
   * @default false
   */
  disabled?: boolean
  
  /**
   * 
   */
  variant?: MaiButtonVariants;
 } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MaiButton = (props: PropsWithChildren<MaiButtonProps>) => {
  const {children, type = "button", variant = "primary"} = props;

  return <button type={type} data-variant={variant} className="mai-button" {...props}>{children}</button>
}