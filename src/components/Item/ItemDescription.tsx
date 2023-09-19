import S from "./Item.module.css";

type ItemDescriptionProps = {
  description: string;
};

export function ItemDescription({ description }: ItemDescriptionProps) {
  return <span className={S.description}>{description}</span>;
}
