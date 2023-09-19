import { InputHTMLAttributes } from "react";

import S from "./Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: InputProps) {
  return <input {...rest} className={S.input} type="text" />;
}
