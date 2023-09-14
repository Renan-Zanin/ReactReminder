import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primaryColor: string;
      secondaryColor: string;
      backgroundColor: string;
      textColor: string;
      border: string;
      delete: string;
    };
  }
}
