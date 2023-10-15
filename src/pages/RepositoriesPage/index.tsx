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
import { IUserProps } from "../../types/getUserProps";
import { useEffect, useState } from "react";
import { getUser, getRepos } from "../../services/api";

export const RepositoriesPage = () => {
  const [user, setUser] = useState();
  const [userRepos, setUserRepos] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [loading, setLoading] = useState(true);
  const { status, repositories } = useRepositoryData();

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, userRepos] = await Promise.all([
        getUser("Aseryo0"),
        getRepos("Aseryo0"),
      ]);
      setUser(userResponse.data);
      setUserRepos(userResponse.data);
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
