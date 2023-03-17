import { PropsWithChildren, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

export type MaiModalProps = { label: string, open?: boolean, onClose?: () => void } & React.HTMLAttributes<HTMLDivElement>;

export const MaiModal = (props: PropsWithChildren<MaiModalProps>) => {
  const {children, open = false} = props;
  const maiModalRef = useRef<HTMLDivElement>(null);
  const maiModalBackdropRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!maiModalRef.current?.contains(e.target as Node)) {
      if (props.onClose) {
        props.onClose();
      } else {
        document.dispatchEvent(new CustomEvent("mai-modal-close"));
      }
    }
  }

  return <>
    <CSSTransition in={open} nodeRef={maiModalRef} timeout={300} unmountOnExit classNames="mai-modal-transition">
      <div className="mai-backdrop" ref={maiModalBackdropRef} onClick={handleBackdropClick}>
        <div className="mai-modal" ref={maiModalRef} role="dialog" aria-modal="true" aria-hidden="true" aria-label={props.label} {...props}>
          {children}
        </div>
      </div>
    </CSSTransition>
  </>
}