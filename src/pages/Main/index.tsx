import { useState } from "react";
import { Main, SearchContainer } from "./styles";
import { AiOutlineSearch, AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const [login, setLogin] = useState("");
  return (
    <Main>
      <div>
        <AiOutlineGithub size={130} color="#fff" />
        <h1>Github finder</h1>
        <SearchContainer>
          <input
            placeholder="Digite um Usuário"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Link to={`/${login}/repos`}>
            <AiOutlineSearch size={45} color={"fff"} />
          </Link>
        </SearchContainer>
      </div>
    </Main>
  );
};
