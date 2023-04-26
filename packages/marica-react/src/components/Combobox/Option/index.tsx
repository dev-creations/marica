import "./Option.css";

export type MaiComboboxOptionProps = {
  children: string;
  key?: string;
  value?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const MaiComboboxOption = (props: MaiComboboxOptionProps) => {
  return <div className="mai-combobox-option" role="option" data-value={props.value || props.children} data-key={props.key || props.children} tabIndex={-1}>{props.children}</div>
}