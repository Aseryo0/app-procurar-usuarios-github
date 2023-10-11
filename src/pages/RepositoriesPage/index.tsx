import { Filter } from "./Filter";
import { UserProfile } from "./profile";
import { RepositoriesContainer, RepositoriesSection, SideBar } from "./styles";

export const Repositories = () => {
  return (
    <RepositoriesContainer>
      <SideBar>
        <UserProfile />
        <Filter />
      </SideBar>
      <RepositoriesSection>ola</RepositoriesSection>
    </RepositoriesContainer>
  );
};
