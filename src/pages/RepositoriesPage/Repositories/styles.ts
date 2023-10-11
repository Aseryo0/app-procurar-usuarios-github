import styled from "styled-components";

export const RepositoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 576px) {
    grid-template-columns: auto;
  }
`;
