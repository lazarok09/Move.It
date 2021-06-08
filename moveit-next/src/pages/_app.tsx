import { ThemeProvider } from "styled-components";
import GlobalStyle from "../global";
import {useState } from "react";


import SwitchTheme from "../components/SwitchTheme";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

function MyApp({ Component, pageProps }) {
  // hooks
  const [theme, setTheme] = useState(light);
  // toggle theme
  function toggleTheme() {
    if (theme.title == "light") {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  }
  function isChecked() {
    if (theme.title == "light") {
      return false;
    } else {
        return true;
    }
  }
  return (
    <div>
      {/* ao invés de passar direto o arquivo light ou dark, eu quero passar o theme.title */}
      <ThemeProvider theme={theme}>
        <SwitchTheme toggleTheme={toggleTheme} />
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
