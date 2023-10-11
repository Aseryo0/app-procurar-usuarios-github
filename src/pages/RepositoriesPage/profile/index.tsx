import { Header, Inner, ProfileContainer, UserImage } from "./styles";
import { MdGroup, MdLocationCity, MdWork } from "react-icons/md";

export const UserProfile = () => {
  return (
    <ProfileContainer>
      <Header>
        <UserImage src="https://avatars.githubusercontent.com/u/101354501?v=4" />
        <h1>@Aseryo</h1>
        <h2>André Felipe</h2>
      </Header>
      <Inner>
        <p>
          <MdGroup size={20} />
          {"30"} seguidores - {"10"} seguindo
        </p>
        <p>
          <MdWork size={20} />
          Prefeitura
        </p>
        <p>
          <MdLocationCity size={20} />
          Reino dos céus
        </p>
      </Inner>
    </ProfileContainer>
  );
};
