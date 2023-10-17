import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4%;
  min-height: 100vh;
  h1 {
    padding: 20px 0;
    font-size: 2.2rem;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 590px;
  gap: 12px;
  input {
    color: #fff;
    font-style: italic;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 64px;
    border: none;
    font-size: 24px;
    outline: none;
    padding: 10px;
    border-radius: 3%;
  }
  input::placeholder {
    color: #7f8c8d;
  }
  a {
    display: flex;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 5%;
    padding: 5px;
  }
`;
