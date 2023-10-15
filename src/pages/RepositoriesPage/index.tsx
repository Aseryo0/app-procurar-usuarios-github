import {
  Loading,
  RepositoriesContainer,
  RepositoriesSection,
  SideBar,
} from "./styles";
import { Filter } from "./Filter";
import { Repositories } from "./Repositories";
import { UserProfile } from "./Profile";
import { useRepositoryData } from "./useRepositoryData";
import { useEffect, useState } from "react";
import { getUser, getRepos } from "../../services/api";
import { useParams } from "react-router-dom";

export const RepositoriesPage = () => {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [userRepos, setUserRepos] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [loading, setLoading] = useState(true);
  const { status, repositories } = useRepositoryData(userRepos);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, userReposResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);
      setUser(userResponse.data);
      setUserRepos(userReposResponse.data);
      setLoading(false);
    };
    loadData();
  }, []);
  if (loading) {
    return <Loading>Carregando...</Loading>;
  }
  return (
    <RepositoriesContainer>
      <SideBar>
        <UserProfile user={user} />
        <Filter
          languages={status}
          currentLanguage={currentLanguage}
          onClick={async (item: string) => setCurrentLanguage(item)}
        />
      </SideBar>
      <RepositoriesSection>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </RepositoriesSection>
    </RepositoriesContainer>
  );
};
