import { PropsWithChildren } from "react";
import "./Button.css";

export type MaiButtonVariants = "primary" | "success" | "info" | "warning" | "danger";

export type MaiButtonProps = { 
  /** 
   * Set disabled to true to make the button inactive. 
   * 
   * @default false
   */
  disabled?: boolean
  
  /**
   * Set the Buttons variant
   * 
   * @default primary
   */
  variant?: MaiButtonVariants;
 } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MaiButton = (props: PropsWithChildren<MaiButtonProps>) => {
  const {children, type = "button", variant = "primary"} = props;
  const buttonProps = {...props, variant: undefined}
  const additionalClassnames = props.className ? ' ' + props.className : '';

  return <button type={type} data-variant={variant} {...buttonProps} className={`mai-button${additionalClassnames}`}>{children}</button>
}