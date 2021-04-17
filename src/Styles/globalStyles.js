import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      vertical-align: baseline;
      list-style: none;
      border: 0;
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }

  :root {
    --primary-color: lightseagreen;
    --secondary-color: #CCCCCC;
    --tertiary-color: #FFFFFF;
    --general-bg: #F9F9F9;
  }

  body{
    background-color: var(--general-bg);
  }

`;
 
export default GlobalStyle;