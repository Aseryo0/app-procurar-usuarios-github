import { Langues } from "../../../types/getLanguagesProps";
import { Clear, FilterContainer, Selector } from "./styles";
interface FilterProps {
  languages: Langues[];
  currentLanguage: string;
  onClick: (value: any) => {};
}
export const Filter = ({
  languages,
  currentLanguage,
  onClick,
}: FilterProps) => {
  return (
    <FilterContainer>
      {languages.map((item) => (
        <Selector
          key={item.name.toLocaleLowerCase()}
          className={currentLanguage === item.name ? "selected" : ""}
          color={item.color}
          onClick={() => onClick && onClick(item.name)}
        >
          <span>{item.name}</span>
          <span>{item.count}</span>
        </Selector>
      ))}
      <Clear>Limpar</Clear>
    </FilterContainer>
  );
};
