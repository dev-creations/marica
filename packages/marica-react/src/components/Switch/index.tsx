import { PropsWithChildren, useCallback } from "react";
import "./Switch.css";

export type MaiSwitchProps = { label: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void } & React.LabelHTMLAttributes<HTMLLabelElement>;

export const MaiSwitch = (props: PropsWithChildren<MaiSwitchProps>) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    props.onChange(e);
  };
  
  return <label className="mai-switch" title={props.label} {...props}>
    <input type="checkbox" onChange={onChange} />
    <span className="toggle"></span>
  </label>
}