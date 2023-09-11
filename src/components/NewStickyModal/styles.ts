import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  width: 30vw;
  height: 45vh;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background-color: var(--font-white);
  border-radius: 8px;

  > div {
    display: flex;
    flex-direction: column;

    width: 70%;
    gap: 1rem;

    > input {
      height: 2.2rem;
    }

    > input,
    textarea {
      width: 100%;
      border: 1px solid #7c7c7c;
      border-radius: 0.5rem;
      padding: 0.4rem;
    }

    > textarea {
      max-height: 12rem;
      max-width: 100%;
      min-height: 9rem;
      min-width: 100%;
      margin-bottom: 4rem;
    }
  }

  > h1 {
    color: var(--purple-900);
    font-family: "Roboto";
    margin-bottom: 2rem;
  }
`;
