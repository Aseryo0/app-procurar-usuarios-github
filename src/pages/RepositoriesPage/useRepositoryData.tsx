import { langColors } from "../../services/config.ts";

export const useRepositoryData = (repositories: any) => {
  let status = repositories
    .map((langs: any) => langs.language)
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
