import { PropsWithChildren, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { MaiBackdrop } from "../Backdrop";

import "./Drawer.css";

export type MaiDrawerProps = { label: string, open?: boolean, onClose?: () => void } & React.HTMLAttributes<HTMLDivElement>;

export const MaiDrawer = (props: PropsWithChildren<MaiDrawerProps>) => {
  const {children, open = false} = props;
  const maiDrawerRef = useRef<HTMLDivElement>(null);
  const maiBackdropRef = useRef<HTMLDivElement>(null);

  return <>
    <CSSTransition in={open} nodeRef={maiBackdropRef} timeout={330} unmountOnExit classNames="mai-drawer-transition">
      <MaiBackdrop childRef={maiDrawerRef} ref={maiBackdropRef} onClose={props.onClose}>
        <div className="mai-drawer" ref={maiDrawerRef} role="dialog" aria-modal="true" aria-hidden={open} aria-label={props.label} {...props}>
          {children}
        </div>
      </MaiBackdrop>
    </CSSTransition>
  </>
}