import { Footer, Repositories } from "./styles";

export const Repository = () => {
  return (
    <Repositories color="">
      <h1>Repository name</h1>
      <p>Repository description</p>
      <Footer color="yellow">
        <span>Repository Lang</span>
        <a href="#">VER</a>
      </Footer>
    </Repositories>
  );
};
