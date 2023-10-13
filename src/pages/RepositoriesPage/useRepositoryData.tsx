import { langColors } from "../../services/config.ts";

export const useRepositoryData = () => {
  const repositories = [
    {
      name: "repo 1",
      description: "Descrição",
      URL: "github.com",
      language: "JavaScript",
    },
    {
      name: "repo 2",
      description: "Descrição",
      URL: "github.com",
      language: "JavaScript",
    },
    {
      name: "repo 3",
      description: "Descrição",
      URL: "github.com",
      language: "TypeScript",
    },
    {
      name: "repo 4",
      description: "Descrição",
      URL: "github.com",
      language: "TypeScript",
    },
    {
      name: "repo 5",
      description: "Descrição",
      URL: "github.com",
      language: "Ruby",
    },
    {
      name: "repo 6",
      description: "Descrição",
      URL: "github.com",
      language: "Ruby",
    },
    {
      name: "repo 7",
      description: "Descrição",
      URL: "github.com",
      language: "PHP",
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

  return { status };
};
