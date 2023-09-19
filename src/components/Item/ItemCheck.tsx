import S from "./Item.module.css";

type ItemCheckProps = {
  checked: boolean;
  onCheck: () => void;
};

export function ItemCheck({ checked, onCheck }: ItemCheckProps) {
  return (
    <input
      type="checkbox"
      className={S.check}
      checked={checked}
      onChange={onCheck}
    />
  );
}
