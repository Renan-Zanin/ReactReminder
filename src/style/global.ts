import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
    background: ${(props) => props.theme.colors.backgroundColor};
}


html {
 //1rem = 16px

 @media(max-width: 1080px) {
  font-size: 93.75%; // 1rem = 15 pixels
 }
 @media(max-width: 720px) {
  font-size: 87.5%; // 1rem = 14 pixels
 }
}
`;
