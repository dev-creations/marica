import { PropsWithChildren, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { MaiBackdrop } from "../Backdrop";

import "./Modal.css";

export type MaiModalProps = { label: string, open?: boolean, onClose?: () => void } & React.HTMLAttributes<HTMLDivElement>;

export const MaiModal = (props: PropsWithChildren<MaiModalProps>) => {
  const {children, open = false} = props;
  const maiModalRef = useRef<HTMLDivElement>(null);
  const maiBackdropRef = useRef<HTMLDivElement>(null);

  return <>
    <CSSTransition in={open} nodeRef={maiBackdropRef} timeout={330} unmountOnExit classNames="mai-modal-transition">
      <MaiBackdrop childRef={maiModalRef} ref={maiBackdropRef} onClose={props.onClose} centered={true}>
        <div className="mai-modal" ref={maiModalRef} role="dialog" aria-modal="true" aria-hidden={open} aria-label={props.label} {...props}>
          {children}
        </div>
      </MaiBackdrop>
    </CSSTransition>
  </>
}