import { PropsWithChildren } from "react";
import "./Icon.css";

import checkmarkIcon from "../../svg/mai-checkmark.svg";

export type MaiIconProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MaiIcon = (props: PropsWithChildren<MaiIconProps>) => {
  return <img src={checkmarkIcon} width="16" height="16" alt="" />
}