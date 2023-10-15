import { MdGroup, MdLocationCity, MdWork } from "react-icons/md";
import { ProfileContainer, Header, UserImage, Inner } from "./styles";
import { IUserProps } from "../../../types/getUserProps";

interface UserProps {
  user: IUserProps;
}

export const UserProfile = ({ user }: UserProps) => {
  return (
    <ProfileContainer>
      <Header>
        <UserImage src={user.avatar_url} alt="imagem de perfil do usuario" />
        <h1>{user.login}</h1>
        <h2>{user.name}</h2>
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
