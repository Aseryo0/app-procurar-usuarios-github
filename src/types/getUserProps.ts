export interface IUserProps {
  avatar_url: string;
  login: string;
  name: string;
  followers: number;
  following: number;
  company: string;
  blog: string;
  location: string;
}
export const initialUser: IUserProps = {
  avatar_url: "",
  login: "",
  name: "",
  followers: 0,
  following: 0,
  company: "",
  blog: "",
  location: "",
};
