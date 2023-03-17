import { PropsWithChildren, forwardRef, ForwardedRef } from "react";
import "./Backdrop.css";

export type MaiBackdropProps = { childRef: React.RefObject<HTMLElement>, onClose?: () => void, centered?: boolean } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const MaiBackdrop = forwardRef((props: PropsWithChildren<MaiBackdropProps>, ref: ForwardedRef<any>) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!props.childRef.current?.contains(e.target as Node)) {
      if (props.onClose) {
        props.onClose();
      } else {
        document.dispatchEvent(new CustomEvent("mai-modal-close"));
      }
    }
  }

  return <div className="mai-backdrop" ref={ref} onClick={handleBackdropClick} data-centered={props.centered}>{props.children}</div>;
});