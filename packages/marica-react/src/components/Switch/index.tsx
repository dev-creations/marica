import { PropsWithChildren } from "react";
import "./Switch.css";

export type MaiSwitchProps = { label: string } & React.LabelHTMLAttributes<HTMLLabelElement>;

export const MaiSwitch = (props: PropsWithChildren<MaiSwitchProps>) => {

  return <label className="mai-switch" title={props.label} {...props}>
    <input type="checkbox" />
    <span className="toggle"></span>
  </label>
}