import styled from "styled-components";

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2d2d2d;
  width: 100%;
  max-height: 25px;
  min-height: 2rem;
  border: none;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0 1rem;
  cursor: pointer;
  color: ${(props) => props.color};
  &:hover,
  &.selected {
    color: #fff;
    background-color: ${(props) => (props.color ? props.color : "#ecf0f1")};
    transform: translateX(5px) scale() (1.02);
  }
  @media (max-width: 768px) {
    border-radius: 20px;
  }
`;
export const Clear = styled.button`
  background-color: transparent;
  border: none;
  text-align: left;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: #fff;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
