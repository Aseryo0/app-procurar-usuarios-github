import { Langues } from "../../../types/getLanguagesProps";
import { Clear, FilterContainer, Selector } from "./styles";
interface FilterProps {
  languages: Langues[];
}
export const Filter = ({ languages }: FilterProps) => {
  return (
    <FilterContainer>
      {languages.map((item) => (
        <Selector key={item.name} color={item.color}>
          <span>{item.name}</span>
          <span>{item.count}</span>
        </Selector>
      ))}
      <Clear>Limpar</Clear>
    </FilterContainer>
  );
};
