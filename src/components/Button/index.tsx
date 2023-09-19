import { ComponentProps } from "react";

import S from "./Button.module.css";

type ButtonProps = ComponentProps<"button">;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={S.button}>
      {children}
    </button>
  );
}
