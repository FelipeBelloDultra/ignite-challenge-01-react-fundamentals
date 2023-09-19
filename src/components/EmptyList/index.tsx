import S from "./EmptyList.module.css";

import clipboardImg from "../../assets/Clipboard.svg";

export function EmptyList() {
  return (
    <div className={S.emptyList}>
      <img src={clipboardImg} alt="Empty list image" width={56} height={56} />

      <p>
        <span>Você ainda não tem tarefas cadastradas</span>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
