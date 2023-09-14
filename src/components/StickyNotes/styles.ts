import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .reminderTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 3rem 0;
    > h1 {
      color: ${(props) => props.theme.colors.border};
      font-family: "Roboto";
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1.5rem;
    grid-column-gap: 2.5rem;
    width: 90%;
    margin-bottom: 5rem;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    height: 15rem;
    padding: 1rem;
    gap: 1rem;
    background-color: ${(props) => props.theme.colors.secondaryColor};
    border-radius: 0.4rem;
    border: 1px solid ${(props) => props.theme.colors.primaryColor};
    > h2 {
      font-family: "Roboto";
      color: ${(props) => props.theme.colors.primaryColor};
    }
    > p {
      font-family: "Roboto";
      width: 90%;
      overflow: auto;
      text-align: center;
      word-break: break-all;
      color: ${(props) => props.theme.colors.primaryColor};

      &::-webkit-scrollbar {
        display: none;
      }
    }
    > button {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: ${(props) => props.theme.colors.delete};
      color: white;
      border: none;
      padding: 8px 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      height: 2rem;
      width: 2rem;
      transition: all 0.2s ease-in-out;
      &:hover {
        opacity: 0.8;
        transform: scale(1.05);
      }

      > i {
        width: 40px;
      }
    }
  }
`;
