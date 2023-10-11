import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 1rem;
  h1 {
    font-size: 1.3rem;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: normal;
  }
  @media (max-width: 768px) {
    h2 {
      display: none;
    }
  }
  p {
    display: flex;
    align-items: center;
    padding: 3px;
    svg {
      margin-right: 10px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const UserImage = styled.img`
  align-items: center;
  border-radius: 50%;
  width: 80%;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;
export const Inner = styled.div`
  padding: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
