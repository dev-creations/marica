import { PropsWithChildren } from "react";

import "./Elevated.css";

export type MaiElevatedProps = { } & React.HTMLAttributes<HTMLDivElement>;

export const MaiElevated = (props: PropsWithChildren<MaiElevatedProps>) => {
  return <div {...props} className={`mai-elevated ${props.className}`} />
}