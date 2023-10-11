import { useState } from "react";
import { Main, SearchContainer } from "./styles";
import { AiOutlineSearch, AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const [user, setUser] = useState("");
  return (
    <Main>
      <div>
        <AiOutlineGithub size={130} color="#fff" />
        <h1>Github finder</h1>
        <SearchContainer>
          <input
            placeholder="Digite um Usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Link to={"http://localhost:5173/repositories"}>
            <AiOutlineSearch size={45} color={"fff"} />
          </Link>
        </SearchContainer>
      </div>
    </Main>
  );
};
