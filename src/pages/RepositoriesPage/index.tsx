import { Filter } from "./Filter";
import { Repositories } from "./Repositories";
import { UserProfile } from "./Profile";
import { RepositoriesContainer, RepositoriesSection, SideBar } from "./styles";
import { IUserProps } from "../../types/getUserProps";

export const RepositoriesPage = () => {
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
        <Filter />
      </SideBar>
      <RepositoriesSection>
        <Repositories />
      </RepositoriesSection>
    </RepositoriesContainer>
  );
};
