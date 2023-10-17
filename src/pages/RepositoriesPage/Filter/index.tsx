import { Langues } from "../../../types/getLanguagesProps";
import { Clear, FilterContainer, Selector } from "./styles";
interface FilterProps {
  languages: Langues[];
  currentLanguage: string;
  onClick: (value: any) => {};
  clearFilter: () => {};
}
export const Filter = ({
  languages,
  currentLanguage,
  onClick,
  clearFilter,
}: FilterProps) => {
  console.log(languages);
  return (
    <FilterContainer>
      {languages.map(
        (item) =>
          item.name != "null" && (
            <Selector
              key={item.name.toLocaleLowerCase()}
              className={currentLanguage === item.name ? "selected" : ""}
              color={item.color}
              onClick={() => onClick && onClick(item.name)}
            >
              <span>{item.name}</span>
              <span>{item.count}</span>
            </Selector>
          )
      )}
      <Clear onClick={clearFilter}>Limpar</Clear>
    </FilterContainer>
  );
};
