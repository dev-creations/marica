import "./TextArea.css";

export type MaiTextArea = { placeholder: string } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const MaiTextArea = (props: MaiTextArea) => {
  return <div className="mai-textarea">
    <textarea placeholder={props.placeholder}></textarea>
  </div>;
}