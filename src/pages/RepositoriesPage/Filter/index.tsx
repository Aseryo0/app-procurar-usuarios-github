import { Clear, FilterContainer, Selector } from "./styles";

interface LangsProps {
  name: string;
  count: number;
  color: string;
}

export const Filter = () => {
  const langs: Array<LangsProps> = [
    {
      name: "JavaScript",
      count: 5,
      color: "#f1c40f",
    },
    {
      name: "Shell",
      count: 4,
      color: "#95a5a6",
    },
    {
      name: "PHP",
      count: 5,
      color: "#3498db",
    },
  ];

  return (
    <FilterContainer>
      {langs.map((lang) => (
        <Selector key={lang.name} color={lang.color}>
          <span>{lang.name}</span>
          <span>{lang.count}</span>
        </Selector>
      ))}
      <Clear>Limpar</Clear>
    </FilterContainer>
  );
};
