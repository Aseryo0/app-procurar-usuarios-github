import { Repository } from "./Repository";
import { RepositoriesContainer } from "./styles";
interface RepoProps {
  repositories: any;
  currentLanguage: string;
}
export const Repositories = ({ repositories, currentLanguage }: RepoProps) => {
  console.log(repositories);
  return (
    <RepositoriesContainer>
      {repositories
        .filter(
          (item: any) => !currentLanguage || item.language === currentLanguage
        )
        .map((repository: any) => (
          <Repository key={repository.id} repository={repository} />
        ))}
    </RepositoriesContainer>
  );
};
