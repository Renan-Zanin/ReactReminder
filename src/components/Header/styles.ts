import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10vh;

  padding: 0 4rem;

  background-color: ${(props) => props.theme.colors.primaryColor};

  > div {
    display: flex;
    gap: 2rem;
    align-items: center;

    > div {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }

  > img {
    height: 2.5rem;
  }
`;
