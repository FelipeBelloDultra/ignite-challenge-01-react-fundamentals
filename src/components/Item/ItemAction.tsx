import { ReactNode } from "react";

import S from "./Item.module.css";

type ItemCheckProps = {
  onAction: () => void;
  children: ReactNode;
};

export function ItemAction({ onAction, children }: ItemCheckProps) {
  return (
    <button onClick={onAction} className={S.action}>
      {children}
    </button>
  );
}
