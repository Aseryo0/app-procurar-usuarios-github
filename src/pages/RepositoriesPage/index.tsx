import { RepositoriesContainer, RepositoriesSection, SideBar } from "./styles";
import { Filter } from "./Filter";
import { Repositories } from "./Repositories";
import { UserProfile } from "./Profile";
import { IUserProps } from "../../types/getUserProps";
import { useRepositoryData } from "./useRepositoryData";
import { useState } from "react";

export const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState("");

  const { status, repositories } = useRepositoryData();
  const usuario: IUserProps = {
    userName: "André",
    avatar_url: "https://avatars.githubusercontent.com/u/101354501?v=4",
    followers: 10,
    following: 10,
    company: "@web-intelligence-arcoverde",
    blog: "",
    location: "Arcoverde, PE",
  };
  return (
    <RepositoriesContainer>
      <SideBar>
        <UserProfile {...usuario} />
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
