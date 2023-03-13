import "./TextInput.css";

export type MaiTextInput = { placeholder: string } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const MaiTextInput = (props: MaiTextInput) => {
  return <label className="mai-text-input">
    <input {...props} />
    <span>{props.placeholder}</span>
  </label>;
}