import { default as axios } from "axios";

export const getUser = async (login: any) =>
  axios.get(`https://api.github.com/users/${login}`);

export const getRepos = async (login: any) =>
  axios.get(`https://api.github.com/users/${login}/repos`);
