import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --white: ${props => props.theme.colors.colorText};
    --buttonsColor: ${props => props.theme.colors.colorWhite};
    --background: ${props => props.theme.colors.background};
    --background-body: ${props => props.theme.colors.bodyBackground};
    --gray-line: #dcdde0;
    --experienceColor: ${props => props.theme.colors.experienceColor};
    --text-hightlight: #b3b9ff;
    --title: ${props => props.theme.colors.colorTitle};
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: ${props => props.theme.colors.colorStartCicle};
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  }
  @media (min-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  @media (min-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  body,
  input,
  textarea {
    font: 400 1rem "Inter", sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  

`