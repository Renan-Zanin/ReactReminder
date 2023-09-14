import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  padding: 0.7rem 1.5rem;

  background-color: ${(props) => props.theme.colors.secondaryColor};
  color: ${(props) => props.theme.colors.backgroundColor};

  font-family: "Roboto";

  border: 1px solid ${(props) => props.theme.colors.secondaryColor};
  border-radius: 0.2rem;

  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
