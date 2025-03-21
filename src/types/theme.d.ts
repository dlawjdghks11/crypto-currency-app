import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    subBackground: string;
    surface: string;
    text: string;
    primary: string;
    border: string;
  }
}
