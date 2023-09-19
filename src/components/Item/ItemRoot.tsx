import { ReactNode } from "react";

import S from "./Item.module.css";

type ItemProps = {
  completed: boolean;
  children: ReactNode;
};

export function ItemRoot({ completed, children }: ItemProps) {
  return (
    <div className={S.item} data-completed={completed}>
      {children}
    </div>
  );
}
