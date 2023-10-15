import { default as axios } from "axios";

export const getUser = async (login: string) =>
  axios.get(`http://localhost:3000/users/${login}`);

export const getRepos = async (login: string) =>
  axios.get(`http://localhost:3000/users/${login}/repos`);
