import { langColors } from "../../services/config.ts";

export const useRepositoryData = () => {
  const repositories = [
    {
      id: 1,
      name: "repo 1",
      description: "Descrição",
      URL: "github.com",
      language: "JavaScript",
    },
    {
      id: 2,
      name: "repo 2",
      description: "Descrição",
      URL: "github.com",
      language: "JavaScript",
    },
    {
      id: 3,
      name: "repo 3",
      description: "Descrição",
      URL: "github.com",
      language: "TypeScript",
    },
    {
      id: 4,
      name: "repo 4",
      description: "Descrição",
      URL: "github.com",
      language: "TypeScript",
    },
    {
      id: 5,
      name: "repo 5",
      description: "Descrição",
      URL: "github.com",
      language: "Ruby",
    },
    {
      id: 6,
      name: "repo 6",
      description: "Descrição",
      URL: "github.com",
      language: "Ruby",
    },
  ];

  let status = repositories
    .map((langs) => langs.language)
    .reduce(
      (item: any, index: string | number) => ({
        ...item,
        [index]: (item[index] || 0) + 1,
      }),
      []
    );
  status = Object.keys(status)
    .map((language) => ({
      name: language,
      count: status[language],
      color: langColors[language.toLocaleLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return { status, repositories };
};
