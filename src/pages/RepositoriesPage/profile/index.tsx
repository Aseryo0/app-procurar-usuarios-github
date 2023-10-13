import { MdGroup, MdLocationCity, MdWork } from "react-icons/md";
import { ProfileContainer, Header, UserImage, Inner } from "./styles";
import { IUserProps } from "../../../types/getUserProps";

export const UserProfile = (user: IUserProps) => {
  return (
    <ProfileContainer>
      <Header>
        <UserImage src={user.avatar_url} alt="imagem de perfil do usuario" />
        <h1>{user.userName}</h1>
        <h2>{user.userName}</h2>
      </Header>
      <Inner>
        <p>
          <MdGroup size={20} />
          {user.followers} seguidores - {user.following} seguindo
        </p>
        {user.company && (
          <p>
            <MdWork size={20} />
            {user.company}
          </p>
        )}
        {user.location && (
          <p>
            <MdLocationCity size={20} />
            {user.location}
          </p>
        )}
      </Inner>
    </ProfileContainer>
  );
};
