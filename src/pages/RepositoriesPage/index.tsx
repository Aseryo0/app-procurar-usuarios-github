import { Filter } from "./Filter";
import { Repositories } from "./Repositories";
import { UserProfile } from "./Profile";
import { RepositoriesContainer, RepositoriesSection, SideBar } from "./styles";
import { IUserProps } from "../../types/getUserProps";
import { useState } from "react";
import { Langues } from "../../types/getLanguagesProps";

export const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState("");

  const usuario: IUserProps = {
    userName: "André",
    avatar_url: "https://avatars.githubusercontent.com/u/101354501?v=4",
    followers: 10,
    following: 10,
    company: "@web-intelligence-arcoverde",
    blog: "",
    location: "Arcoverde, PE",
  };
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
      name: "repo 7",
      description: "Descrição",
      URL: "github.com",
      language: "TypeScript",
    },
    {
      name: "repo 4",
      description: "Descrição",
      URL: "github.com",
      language: "Java",
    },
    {
      name: "repo 5",
      description: "Descrição",
      URL: "github.com",
      language: "PHP",
    },
    {
      name: "repo 6",
      description: "Descrição",
      URL: "github.com",
      language: "PHP",
    },
  ];
  const languages: Langues[] = [
    {
      name: "JavaScript",
      count: 5,
      color: "#f1c40f",
    },
    {
      name: "Shell",
      count: 4,
      color: "#95a5a6",
    },
    {
      name: "PHP",
      count: 5,
      color: "#3498db",
    },
  ];
  let linguagens: string[] = repositories.map((langs) => langs.language);
  let status = linguagens.reduce(
    (item: any, index: string | number) => ({
      ...item,
      [index]: (item[index] || 0) + 1,
    }),
    []
  );

  console.log(status);
  return (
    <RepositoriesContainer>
      <SideBar>
        <UserProfile {...usuario} />
        <Filter languages={languages} />
      </SideBar>
      <RepositoriesSection>
        <Repositories />
      </RepositoriesSection>
    </RepositoriesContainer>
  );
};
