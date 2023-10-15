import styled from "styled-components";
export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
export const RepositoriesContainer = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SideBar = styled.aside`
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden;
`;

export const RepositoriesSection = styled.section`
  background-color: #2b2b2b;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 40px;
  @media (max-width: 768px) {
    height: 100%;
  }
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;
