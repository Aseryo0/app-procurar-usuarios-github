import styled from "styled-components";

export const Repositories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.25);
  padding: 10px;
  border-left: 3px solid ${(props) => props.color || "#2c3e50"};
  h1 {
    font-size: 1.2rem;
    font-weight: normal;
  }
  p {
    font-size: 0.8rem;
    line-height: 1.25;
    margin: 1rem 0;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${(props) => props.color || "#2c3e50"};
  span {
    color: inherit;
  }
  a {
    color: inherit;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
  }
  a:hover {
    color: #2c3e50;
  }
`;
