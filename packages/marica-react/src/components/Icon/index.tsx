import { PropsWithChildren } from "react";
import "iconoir/css/iconoir.css";
import "./Icon.css";

export type MaiIconType = "check" | "more-vert" | "menu";

export type MaiIconProps = {
  type: MaiIconType,
  title?: string,
};

export const MaiIcon = (props: PropsWithChildren<MaiIconProps>) => {
  return <span className={`mai-icon iconoir-${props.type}`}></span>;
}