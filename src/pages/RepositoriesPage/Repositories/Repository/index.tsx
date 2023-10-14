import { langColors } from "../../../../services/config";
import { IRepositoriesProps } from "../../../../types/getRepositoriesProps";
import { Footer, Repositories } from "./styles";
interface Repositoryprops {
  repository: IRepositoriesProps;
}
export const Repository = ({ repository }: Repositoryprops) => {
  const color =
    langColors[repository.language && repository.language.toLocaleLowerCase()];
  return (
    <Repositories color={color}>
      <h1>{repository.name}</h1>
      <p>{repository.description}</p>
      <Footer color={color}>
        <span>{repository.language}</span>
        <a href={repository.URL} target="_blank">
          VER
        </a>
      </Footer>
    </Repositories>
  );
};
