import S from "./Header.module.css";

import logoImg from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className={S.header}>
      <img src={logoImg} alt="Logo image" />
    </header>
  );
}
