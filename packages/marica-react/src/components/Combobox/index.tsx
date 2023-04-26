import { PropsWithChildren, createContext, useId, useRef, useState } from "react";

import "./Combobox.css";
import { MaiTextInput } from "../TextInput";

export type ComboboxProps = {
  selected?: string,
  editable?: boolean,
  onChange?: (ev: {value: string}) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const MaiCombobox = (props: PropsWithChildren<ComboboxProps>) => {
  const [open, setOpen] = useState(false);
  const maiComboboxItemsId = useId();
  const comboboxRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "Escape")) {
      return;
    }

    if (!open) {
      setOpen(true);
    }

    if (e.key === "Escape") {
      setOpen(false);
      return;
    }

    setTimeout(() => {
      if (e.key === "ArrowDown") {
        const options = Array.from(document.querySelectorAll(".mai-combobox-items > *"));
        const i = options.findIndex(e => document.activeElement === e);
        const el = options[i+1] as HTMLDivElement;
        if (el && comboboxRef.current?.querySelector("input")) {
          comboboxRef.current.querySelector("input")!.value = el.getAttribute("data-value") || "";
          setValue(el.getAttribute("data-value") || "");
          props.onChange?.({value: el.getAttribute("data-value") || ""});
          el.focus();
        }
      }
  
      if (e.key === "ArrowUp") {
        const options = Array.from(document.querySelectorAll(".mai-combobox-items > *"));
        const i = options.findIndex(e => document.activeElement === e);
        const el = options[i-1] as HTMLDivElement;
        if (el && comboboxRef.current?.querySelector("input")) {
          const inputElement = comboboxRef.current.querySelector("input") as HTMLInputElement;
          inputElement.value = el.getAttribute("data-value") || "";
          inputElement.dispatchEvent(new CustomEvent("onChange"))
          setValue(el.getAttribute("data-value") || "");
          props.onChange?.({value: el.getAttribute("data-value") || ""});
          el.focus();
        }
      }
    })
  }

  const handleBlur = () => {
    if (!document.querySelector(".mai-combobox:focus-within")) {
      setOpen(false);
    }
  }

  return <div className="mai-combobox" onKeyDown={handleKeyDown} onBlur={handleBlur} ref={comboboxRef}>
    <div role="combobox" aria-expanded={open} aria-controls={maiComboboxItemsId}>
      <MaiTextInput className="mai-combobox-input" placeholder="Select" value={value} />
    </div>
    <div className="mai-combobox-items" id={maiComboboxItemsId} role="listbox">
      {props.children}
    </div>
  </div>
}